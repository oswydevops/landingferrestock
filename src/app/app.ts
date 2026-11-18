import {isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, DestroyRef, PLATFORM_ID, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {catchError, EMPTY, timer} from 'rxjs';
import {FerreStockData} from './services/ferrestock-data';

interface GitHubRelease {
  tag_name: string;
  html_url: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly data = inject(FerreStockData);
  private dismissedVersion: string | null = null;
  private dismissTimeout: ReturnType<typeof setTimeout> | undefined;

  readonly availableRelease = signal<GitHubRelease | null>(null);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    timer(0, 60 * 60 * 1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.checkForRelease());
  }

  dismissRelease(): void {
    const release = this.availableRelease();
    if (!release) {
      return;
    }

    this.dismissedVersion = release.tag_name;
    this.availableRelease.set(null);
    clearTimeout(this.dismissTimeout);
  }

  private checkForRelease(): void {
    this.http
      .get<GitHubRelease>('https://api.github.com/repos/oswydevops/offlineipvreleases/releases/latest')
      .pipe(
        catchError(error => {
          console.error('No se pudo consultar la última versión de FerreStock.', error);
          return EMPTY;
        }),
      )
      .subscribe(release => {
        if (
          !release.tag_name ||
          !release.html_url ||
          !this.isNewerVersion(release.tag_name, this.data.appVersion) ||
          this.dismissedVersion === release.tag_name
        ) {
          return;
        }

        this.availableRelease.set(release);
        clearTimeout(this.dismissTimeout);
        this.dismissTimeout = setTimeout(() => {
          this.dismissedVersion = release.tag_name;
          this.availableRelease.set(null);
        }, 8000);
      });
  }

  private isNewerVersion(latest: string, current: string): boolean {
    const latestParts = latest.replace(/^v/i, '').split('.').map(Number);
    const currentParts = current.replace(/^v/i, '').split('.').map(Number);

    if (
      latestParts.length !== 3 ||
      currentParts.length !== 3 ||
      [...latestParts, ...currentParts].some(part => !Number.isInteger(part) || part < 0)
    ) {
      return false;
    }

    for (let index = 0; index < 3; index++) {
      if (latestParts[index] !== currentParts[index]) {
        return latestParts[index] > currentParts[index];
      }
    }

    return false;
  }
}
