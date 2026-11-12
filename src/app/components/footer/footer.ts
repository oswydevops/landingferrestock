import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrandLogo } from '../brand-logo/brand-logo';
import { FerreStockData } from '../../services/ferrestock-data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, BrandLogo],
  template: `
    <footer class="bg-slate-950 text-slate-400 py-12 lg:py-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12 text-center md:text-left">
          <!-- Columna 1: Marca e Identidad -->
          <div class="md:col-span-4 space-y-4">
            <div class="flex items-center justify-center md:justify-start gap-3">
              <app-brand-logo variant="compact" [muted]="true" />
            </div>
            <p class="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              FerreStock es el sistema de escritorio 100% offline para la gestión integral de IPV, punto de venta de mostrador, catálogo de productos, cierre de caja, entre otras funciones.
            </p>
          </div>

          <!-- Columna 2: Métodos de Pago Vectorizados (B&W) -->
          <div class="md:col-span-4 md:pl-2 lg:pl-6">
            <h4 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Métodos de Pago
            </h4>
            <ul class="space-y-3 text-xs sm:text-sm">
              <!-- Transfermóvil Vector B&W -->
              <li class="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-white transition-colors group">
                <div class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 group-hover:bg-white/15 transition-all">
                  <svg class="w-4 h-4 fill-current text-slate-200 group-hover:text-white" viewBox="0 0 24 24" aria-hidden="true">
                    <!-- Flecha superior -->
                    <path d="M6 4h12v4.2l-3.2-3.2-4.8 4.8-2.6-2.6 4.8-4.8L9.4 7.2H6V4z" />
                    <!-- Flecha inferior -->
                    <path d="M18 20H6v-4.2l3.2 3.2 4.8-4.8 2.6 2.6-4.8 4.8 2.8-2.8H18V20z" />
                  </svg>
                </div>
                <span class="font-bold tracking-wide">Transfermóvil</span>
              </li>

              <!-- EnZona Vector B&W -->
              <li class="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-white transition-colors group">
                <div class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 group-hover:bg-white/15 transition-all">
                  <svg class="w-4 h-4 text-slate-200 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8" />
                    <!-- E -->
                    <rect x="5.5" y="6.5" width="4.8" height="2.2" rx="1.1" />
                    <rect x="5.5" y="10.9" width="4.8" height="2.2" rx="1.1" />
                    <rect x="5.5" y="15.3" width="4.8" height="2.2" rx="1.1" />
                    <!-- Z -->
                    <rect x="12" y="6.5" width="6.5" height="2.2" rx="1.1" />
                    <path d="M16.5 7.5 L12.5 16.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                    <rect x="12" y="15.3" width="6.5" height="2.2" rx="1.1" />
                  </svg>
                </div>
                <span class="font-bold tracking-wide">EnZona</span>
              </li>

              <!-- QvaPay Vector B&W -->
              <li class="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-white transition-colors group">
                <div class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 group-hover:bg-white/15 transition-all">
                  <svg class="w-4 h-4 text-slate-200 group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="22" height="22" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.6"/>
                    <path d="M5.5 12.5 L9 16 A1 1 0 0 0 10.4 16 L15.8 8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.2 16 L18.8 8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="font-bold tracking-wide">QvaPay</span>
              </li>
            </ul>
          </div>

          <!-- Columna 3: Contacto Directo -->
          <div class="md:col-span-4 md:pl-2 lg:pl-6">
            <h4 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
            <ul class="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:ing.osvaldonavasmartinez@gmail.com"
                  class="hover:text-blue-400 transition-colors flex items-start justify-center md:justify-start gap-2.5 group">
                  <mat-icon class="icon-xs text-blue-400 shrink-0 mt-0.5">email</mat-icon>
                  <span class="break-all group-hover:underline text-slate-300">ing.osvaldonavasmartinez&#64;gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  [href]="getWhatsappLink()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-emerald-300 transition-colors flex items-center justify-center md:justify-start gap-2.5 text-slate-300 font-medium">
                  <mat-icon class="icon-xs text-emerald-400 shrink-0">phone</mat-icon>
                  <span>+53 63242069</span>
                </a>
              </li>
              <li class="pt-1 text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                Atención directa para licencias, soporte técnico y consultas sobre la aplicación.
              </li>
            </ul>
          </div>
        </div>

        <!-- Barra Legal Inferior -->
        <div class="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          © 2026 FerreStock · Desarrollado por La Sociedad Inc. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  `
})
export class Footer {
  readonly data = inject(FerreStockData);

  getWhatsappLink(): string {
    const text = encodeURIComponent('Hola, necesito asistencia técnica o consulta sobre FerreStock.');
    const cleanPhone = this.data.supportPhone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${text}`;
  }
}
