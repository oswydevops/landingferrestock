import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FerreStockData {
  // Configuración de GitHub Releases y enlaces de descarga
  readonly githubReleasesUrl = signal<string>('https://github.com/oswydevops/offlineipvreleases/releases');
  readonly directExeDownloadUrl = 'https://github.com/oswydevops/offlineipvreleases/releases/latest/download/FerreStock-Setup.exe';

  // Versión y metadatos
  readonly appVersion = 'v1.1.0';
  readonly releaseDate = 'Noviembre 2026';
  readonly priceUsd = 4.99;
  readonly defaultExchangeRateCup = 925; // 1 USD = 925 CUP
  readonly defaultRateClasica = 1.16; // 1 USD = 1.16 USD Clásica
  readonly supportPhone = '+53 63242069';
  readonly supportWhatsappMessage = 'Hola, deseo información sobre la licencia de FerreStock v1.1.0 para mi negocio.';

}
