import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (muted()) {
      <!-- Versión Monocromática Gris para Footer / Fondos Oscuros -->
      <div class="flex items-center gap-2.5 text-slate-400">
        <svg class="h-9 w-9 shrink-0" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- Engranaje en gris -->
          <path d="M 105, 20 L 135, 20 L 139, 43 A 108,108 0 0,1 163,53 L 183, 36 L 204, 57 L 187, 77 A 108,108 0 0,1 197,101 L 220, 105 L 220, 135 L 197, 139 A 108,108 0 0,1 187,163 L 204, 183 L 183, 204 L 163, 187 A 108,108 0 0,1 139,197 L 135, 220 L 105, 220 L 101, 197 A 108,108 0 0,1 77,187 L 57, 204 L 36, 183 L 53, 163 A 108,108 0 0,1 43,139 L 20, 135 L 20, 105 L 43, 101 A 108,108 0 0,1 53,77 L 36, 57 L 57, 36 L 77, 53 A 108,108 0 0,1 101,43 Z" class="fill-slate-600" />
          <!-- Centro hueco oscuro acorde al fondo del footer -->
          <circle cx="120" cy="120" r="75" class="fill-slate-950" />
          <!-- Código de barras en gris medio -->
          <g class="fill-slate-500">
            <rect x="85" y="75" width="7" height="90" rx="3.5" />
            <rect x="98" y="75" width="14" height="90" rx="4" />
            <rect x="118" y="75" width="6" height="90" rx="3" />
            <rect x="130" y="75" width="18" height="90" rx="4" />
            <rect x="154" y="75" width="7" height="90" rx="3.5" />
            <rect x="167" y="75" width="11" height="90" rx="4" />
          </g>
          <!-- Checkmark en gris claro para contraste visual -->
          <path d="M 70,125 L 112,167 L 212,67" fill="none" class="stroke-slate-950" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 70,125 L 112,167 L 212,67" fill="none" class="stroke-slate-300" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="212" cy="67" r="5" class="fill-slate-300" />
        </svg>

        <span class="text-xl font-black tracking-tight text-slate-300">
          Ferre<span class="text-slate-400">Stock</span>
        </span>
      </div>
    } @else if (variant() === 'full') {
      <div class="flex items-center gap-3">
        <!-- Isotipo Vectorial Fiel con gradientes y checkmark -->
        <svg class="h-12 w-12 shrink-0 drop-shadow-sm" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="primaryGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0052CC" />
              <stop offset="100%" stop-color="#1A73E8" />
            </linearGradient>
            <linearGradient id="accentGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF7A00" />
              <stop offset="100%" stop-color="#FF5500" />
            </linearGradient>
            <filter id="shadowFull" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#001F54" flood-opacity="0.2" />
            </filter>
          </defs>
          <g filter="url(#shadowFull)">
            <!-- Engranaje robusto industrial -->
            <path d="M 105, 20 L 135, 20 L 139, 43 A 108,108 0 0,1 163,53 L 183, 36 L 204, 57 L 187, 77 A 108,108 0 0,1 197,101 L 220, 105 L 220, 135 L 197, 139 A 108,108 0 0,1 187,163 L 204, 183 L 183, 204 L 163, 187 A 108,108 0 0,1 139,197 L 135, 220 L 105, 220 L 101, 197 A 108,108 0 0,1 77,187 L 57, 204 L 36, 183 L 53, 163 A 108,108 0 0,1 43,139 L 20, 135 L 20, 105 L 43, 101 A 108,108 0 0,1 53,77 L 36, 57 L 57, 36 L 77, 53 A 108,108 0 0,1 101,43 Z" fill="url(#primaryGradFull)" />
            <!-- Centro hueco -->
            <circle cx="120" cy="120" r="75" fill="#FFFFFF" />
            <!-- Código de barras -->
            <g fill="url(#primaryGradFull)">
              <rect x="85" y="75" width="7" height="90" rx="3.5" />
              <rect x="98" y="75" width="14" height="90" rx="4" />
              <rect x="118" y="75" width="6" height="90" rx="3" />
              <rect x="130" y="75" width="18" height="90" rx="4" />
              <rect x="154" y="75" width="7" height="90" rx="3.5" />
              <rect x="167" y="75" width="11" height="90" rx="4" />
            </g>
            <!-- Checkmark dinámico blanco y naranja -->
            <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="url(#accentGradFull)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="212" cy="67" r="5" fill="#FFFFFF" />
          </g>
        </svg>

        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="rounded bg-orange-500/10 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-orange-600">SISTEMA IPV</span>
            <span class="text-[10px] font-semibold text-slate-400">· 100% OFFLINE</span>
          </div>
          <span class="text-xl font-black tracking-tight text-slate-900 leading-none mt-0.5">
            Ferre<span class="text-blue-600">Stock</span>
          </span>
          <span class="text-[9px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">TU INVENTARIO BAJO CONTROL</span>
        </div>
      </div>
    } @else if (variant() === 'compact') {
      <div class="flex items-center gap-2.5">
        <svg class="h-9 w-9 shrink-0 drop-shadow-sm" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="primaryGradCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0052CC" />
              <stop offset="100%" stop-color="#1A73E8" />
            </linearGradient>
            <linearGradient id="accentGradCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF7A00" />
              <stop offset="100%" stop-color="#FF5500" />
            </linearGradient>
          </defs>
          <path d="M 105, 20 L 135, 20 L 139, 43 A 108,108 0 0,1 163,53 L 183, 36 L 204, 57 L 187, 77 A 108,108 0 0,1 197,101 L 220, 105 L 220, 135 L 197, 139 A 108,108 0 0,1 187,163 L 204, 183 L 183, 204 L 163, 187 A 108,108 0 0,1 139,197 L 135, 220 L 105, 220 L 101, 197 A 108,108 0 0,1 77,187 L 57, 204 L 36, 183 L 53, 163 A 108,108 0 0,1 43,139 L 20, 135 L 20, 105 L 43, 101 A 108,108 0 0,1 53,77 L 36, 57 L 57, 36 L 77, 53 A 108,108 0 0,1 101,43 Z" fill="url(#primaryGradCompact)" />
          <circle cx="120" cy="120" r="75" fill="#FFFFFF" />
          <g fill="url(#primaryGradCompact)">
            <rect x="85" y="75" width="7" height="90" rx="3.5" />
            <rect x="98" y="75" width="14" height="90" rx="4" />
            <rect x="118" y="75" width="6" height="90" rx="3" />
            <rect x="130" y="75" width="18" height="90" rx="4" />
            <rect x="154" y="75" width="7" height="90" rx="3.5" />
            <rect x="167" y="75" width="11" height="90" rx="4" />
          </g>
          <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="url(#accentGradCompact)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="212" cy="67" r="5" fill="#FFFFFF" />
        </svg>

        <span class="text-xl font-black tracking-tight text-slate-900">
          Ferre<span class="text-blue-600">Stock</span>
        </span>
      </div>
    } @else {
      <!-- Solo Isotipo -->
      <svg class="h-10 w-10 shrink-0 drop-shadow-sm" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="primaryGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0052CC" />
            <stop offset="100%" stop-color="#1A73E8" />
          </linearGradient>
          <linearGradient id="accentGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF7A00" />
            <stop offset="100%" stop-color="#FF5500" />
          </linearGradient>
        </defs>
        <path d="M 105, 20 L 135, 20 L 139, 43 A 108,108 0 0,1 163,53 L 183, 36 L 204, 57 L 187, 77 A 108,108 0 0,1 197,101 L 220, 105 L 220, 135 L 197, 139 A 108,108 0 0,1 187,163 L 204, 183 L 183, 204 L 163, 187 A 108,108 0 0,1 139,197 L 135, 220 L 105, 220 L 101, 197 A 108,108 0 0,1 77,187 L 57, 204 L 36, 183 L 53, 163 A 108,108 0 0,1 43,139 L 20, 135 L 20, 105 L 43, 101 A 108,108 0 0,1 53,77 L 36, 57 L 57, 36 L 77, 53 A 108,108 0 0,1 101,43 Z" fill="url(#primaryGradIcon)" />
        <circle cx="120" cy="120" r="75" fill="#FFFFFF" />
        <g fill="url(#primaryGradIcon)">
          <rect x="85" y="75" width="7" height="90" rx="3.5" />
          <rect x="98" y="75" width="14" height="90" rx="4" />
          <rect x="118" y="75" width="6" height="90" rx="3" />
          <rect x="130" y="75" width="18" height="90" rx="4" />
          <rect x="154" y="75" width="7" height="90" rx="3.5" />
          <rect x="167" y="75" width="11" height="90" rx="4" />
        </g>
        <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M 70,125 L 112,167 L 212,67" fill="none" stroke="url(#accentGradIcon)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="212" cy="67" r="5" fill="#FFFFFF" />
      </svg>
    }
  `
})
export class BrandLogo {
  readonly variant = input<'full' | 'compact' | 'icon'>('compact');
  readonly muted = input<boolean>(false);
}
