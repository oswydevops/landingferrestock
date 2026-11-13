import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FerreStockData } from '../../services/ferrestock-data';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="inicio" class="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <!-- Glow ambiental sutil azul industrial -->
      <div class="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div class="absolute top-1/3 left-0 -translate-x-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Columna izquierda: Propuesta de Valor & CTAs -->
          <div class="lg:col-span-6 flex flex-col justify-center text-left">
            <!-- Metadata limpia sin cajas píldora genéricas -->
            <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 tracking-wide uppercase">
              <span aria-hidden="true" class="text-slate-300">·</span>
              <span>100% Offline</span>
              <span aria-hidden="true" class="text-slate-300">·</span>
              <span>Windows x64</span>
              <span aria-hidden="true" class="text-slate-300">·</span>
              <span class="text-emerald-600 font-bold">Planes Flexibles</span>
            </div>

            <!-- Título Principal de Alto Impacto -->
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] text-balance">
              Tu inventario bajo control,
              <span class="text-blue-600"> 100% Sin Internet, </span>
              con ventas TPV y cierre de caja.
            </h1>

            <!-- Descripción orientada a resultados concretos -->
            <p class="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl text-pretty">
              El software de escritorio definitivo para cualquier negocio, tiendas de materiales y comercios. Gestiona el <strong>IPV del día</strong>, despacha ventas en mostrador en segundos, cuadra billetes físicos en <strong>CUP</strong> y mantén tus datos blindados sin depender de internet.
            </p>

            <!-- Fila de Botones de Descarga con enlace a GitHub -->
            <div class="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <!-- Botón 1: Descarga Directa Ejecutable -->
              <a
                [href]="data.directExeDownloadUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <mat-icon class="text-xl">download</mat-icon>
                <span>Descargar</span>
              </a>

              <!-- Botón 2: Ver Releases en GitHub -->
              <a
                [href]="data.githubReleasesUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-bold text-slate-700 bg-white hover:bg-slate-100 hover:text-slate-900 border border-slate-300 active:scale-[0.98] rounded-xl shadow-sm transition-all duration-200">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub Releases</span>
              </a>
            </div>

            <!-- Fila de Puntos de Confianza -->
            <div class="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
              <div class="flex items-center gap-2">
                <mat-icon class="text-blue-600 text-base">wifi_off</mat-icon>
                <span>Cero caídas por internet</span>
              </div>
              <div class="flex items-center gap-2">
                <mat-icon class="text-emerald-600 text-base">payments</mat-icon>
                <span>Desglose de billetes CUP</span>
              </div>
              <div class="flex items-center gap-2">
                <mat-icon class="text-orange-500 text-base">verified</mat-icon>
                <span>Desde $4.99 USD/mes</span>
              </div>
            </div>
          </div>

          <!-- Columna derecha: Maqueta Interactiva de la Ventana de FerreStock -->
          <div class="lg:col-span-6">
            <div class="relative rounded-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl ring-1 ring-slate-800/80">
              
              <!-- Barra de título de ventana de Windows -->
              <div class="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-slate-400 text-xs font-mono">
                <div class="flex items-center gap-2">
                  <div class="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span class="text-slate-200 font-sans font-semibold">FerreStock | Gestiona tu Negocio</span>
                </div>
                <!-- Controles de ventana estándar Windows -->
                <div class="flex items-center gap-3">
                  <span class="hover:text-white cursor-pointer">─</span>
                  <span class="hover:text-white cursor-pointer">□</span>
                  <span class="hover:text-red-400 cursor-pointer">✕</span>
                </div>
              </div>

              <!-- Pestañas de previsualización interactiva -->
              <div class="bg-slate-950 px-3 py-2 flex items-center gap-2 border-b border-slate-800 overflow-x-auto text-xs">
                <button
                  type="button"
                  (click)="selectedTab.set('dashboard')"
                  [class]="selectedTab() === 'dashboard' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'"
                  class="px-2.5 py-1 rounded-md transition-colors whitespace-nowrap">
                  Dashboard
                </button>
                <button
                  type="button"
                  (click)="selectedTab.set('tpv')"
                  [class]="selectedTab() === 'tpv' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'"
                  class="px-2.5 py-1 rounded-md transition-colors whitespace-nowrap">
                  Venta TPV
                </button>
                <button
                  type="button"
                  (click)="selectedTab.set('caja')"
                  [class]="selectedTab() === 'caja' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'"
                  class="px-2.5 py-1 rounded-md transition-colors whitespace-nowrap">
                  Cierre de Caja
                </button>
                <button
                  type="button"
                  (click)="selectedTab.set('ipv')"
                  [class]="selectedTab() === 'ipv' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'"
                  class="px-2.5 py-1 rounded-md transition-colors whitespace-nowrap">
                  IPV del Día
                </button>
              </div>

              <!-- Captura Real de la Aplicación -->
              <div class="relative bg-slate-950 rounded-b-xl overflow-hidden">
                <img
                  [src]="getActiveScreenshotImage()"
                  [alt]="getActiveScreenshotTitle()"
                  referrerpolicy="no-referrer"
                  class="w-full h-auto object-cover" />

                <button
                  type="button"
                  (click)="screenshotExpanded.set(true)"
                  [attr.aria-label]="'Ampliar captura: ' + getActiveScreenshotTitle()"
                  class="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-950/80 text-white hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                  title="Ampliar captura">
                  <mat-icon>zoom_in</mat-icon>
                </button>

                <!-- Pie de captura informativa -->
                <div class="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span class="truncate">{{ getActiveScreenshotTitle() }}</span>
                  <span class="text-[11px] text-slate-500 font-mono shrink-0">Vista previa real</span>
                </div>
              </div>

            </div>

            <div class="mt-8 lg:mt-10 flex justify-center">
              <a
                href="https://t.me/ferrestockcomunity"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <mat-icon class="text-xl">send</mat-icon>
                <span>Unirse a la Comunidad</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      @if (screenshotExpanded()) {
        <div
          class="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="'Captura ampliada: ' + getActiveScreenshotTitle()">
          <button
            type="button"
            (click)="screenshotExpanded.set(false)"
            aria-label="Cerrar captura ampliada"
            class="absolute inset-0 w-full h-full cursor-default"></button>
          <button
            type="button"
            (click)="screenshotExpanded.set(false)"
            aria-label="Cerrar captura ampliada"
            class="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <mat-icon>close</mat-icon>
          </button>
          <img
            [src]="getActiveScreenshotImage()"
            [alt]="getActiveScreenshotTitle()"
            referrerpolicy="no-referrer"
            class="relative z-10 w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      }
    </section>
  `
})
export class Hero {
  readonly data = inject(FerreStockData);
  readonly selectedTab = signal<'dashboard' | 'tpv' | 'caja' | 'ipv'>('dashboard');
  readonly screenshotExpanded = signal(false);

  @HostListener('document:keydown.escape')
  closeExpandedScreenshot(): void {
    this.screenshotExpanded.set(false);
  }

  getActiveScreenshotImage(): string {
    switch (this.selectedTab()) {
      case 'dashboard':
        return 'assets/aistudio/Captura_de_pantalla__243__0cd4d833.png';
      case 'tpv':
        return 'assets/aistudio/Captura_de_pantalla__244__1ca936c9.png';
      case 'caja':
        return 'assets/aistudio/Captura_de_pantalla__250__2c42bd4d.png';
      case 'ipv':
        return 'assets/aistudio/Captura_de_pantalla__245__15cc4b12.png';
    }
  }

  getActiveScreenshotTitle(): string {
    switch (this.selectedTab()) {
      case 'dashboard':
        return 'Dashboard General de Ventas y Rendimiento Diario';
      case 'tpv':
        return 'Modal de Venta Rápida de Mostrador (TPV) 100% Offline';
      case 'caja':
        return 'Cierre de Caja con Desglose Físico de Billetes en CUP';
      case 'ipv':
        return 'Control de IPV del Día: Entradas, Despachos y Ganancias';
    }
  }
}
