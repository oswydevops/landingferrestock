import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrandLogo } from '../brand-logo/brand-logo';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, BrandLogo],
  template: `
    <!-- Header principal adherente -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        <!-- Zona 1: Marca comercial FerreStock -->
        <a href="#inicio" class="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
          <app-brand-logo variant="compact" />
        </a>

        <!-- Zona 2: Navegación limpia de una línea -->
        <nav class="hidden sm:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#funciones" class="hover:text-blue-600 transition-colors whitespace-nowrap">Funciones</a>
          <a href="#licencia" class="hover:text-blue-600 transition-colors whitespace-nowrap">Licencias & Precios</a>
          <a href="#requisitos" class="hover:text-blue-600 transition-colors whitespace-nowrap">Requisitos</a>
          <a href="#faq" class="hover:text-blue-600 transition-colors whitespace-nowrap">FAQs</a>
        </nav>

        <!-- Acciones de navegación -->
        <div class="flex items-center gap-2">
          <a
            href="/Manual-de-Usuario-FerreStock.pdf"
            download="Manual-de-Usuario-FerreStock.pdf"
            class="hidden sm:inline-flex items-center gap-1.5 shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Descargar manual de usuario en PDF"
            title="Descargar manual de usuario">
            <mat-icon class="icon-xs">picture_as_pdf</mat-icon>
            <span class="whitespace-nowrap">Manual PDF</span>
          </a>

          <!-- Botón Menú Móvil -->
          <button
            type="button"
            class="flex sm:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            (click)="toggleMobileMenu()"
            [attr.aria-label]="isMobileMenuOpen() ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
            [attr.aria-expanded]="isMobileMenuOpen()"
            aria-controls="mobile-navigation">
            <mat-icon>{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Menú Desplegable Móvil -->
      <div
        id="mobile-navigation"
        class="sm:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
        [style.grid-template-rows]="isMobileMenuOpen() ? '1fr' : '0fr'"
        [attr.aria-hidden]="!isMobileMenuOpen()"
        [attr.inert]="isMobileMenuOpen() ? null : ''">
        <div class="min-h-0 overflow-hidden">
          <nav
            class="border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1 shadow-lg transition-[opacity,transform] duration-300 ease-in-out"
            [class.opacity-0]="!isMobileMenuOpen()"
            [class.opacity-100]="isMobileMenuOpen()"
            [class.-translate-y-2]="!isMobileMenuOpen()"
            [class.translate-y-0]="isMobileMenuOpen()">
            <a (click)="closeMobileMenu()" href="#funciones" class="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600">Funciones</a>
            <a (click)="closeMobileMenu()" href="#licencia" class="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600">Licencias & Precios</a>
            <a (click)="closeMobileMenu()" href="#requisitos" class="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600">Requisitos del Sistema</a>
            <a (click)="closeMobileMenu()" href="#faq" class="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600">Preguntas Frecuentes</a>
            <a
              (click)="closeMobileMenu()"
              href="/Manual-de-Usuario-FerreStock.pdf"
              download="Manual-de-Usuario-FerreStock.pdf"
              class="mt-2 flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100">
              <mat-icon class="icon-sm">picture_as_pdf</mat-icon>
              Descargar manual PDF
            </a>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class Header {
  readonly isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
