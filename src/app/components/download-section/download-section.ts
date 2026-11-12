import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-download-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="requisitos" class="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado de Requisitos y Puesta en Marcha -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Requisitos del Sistema y Puesta en Marcha
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            FerreStock es ligero, veloz y no requiere servidores externos ni configuraciones complejas en tu computadora.
          </p>
        </div>

        <!-- Requisitos del Sistema y Pasos de Instalación -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <!-- Requisitos Técnicos -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-5">
                <mat-icon class="text-2xl">settings_suggest</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">
                Requisitos Técnicos del Sistema
              </h3>
              <ul class="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li class="flex items-start gap-3">
                  <mat-icon class="icon-sm text-emerald-400 mt-0.5 shrink-0">check</mat-icon>
                  <span><strong>Sistema Operativo:</strong> Windows 10 o Windows 11 (ediciones 64-bit Home, Pro, Enterprise).</span>
                </li>
                <li class="flex items-start gap-3">
                  <mat-icon class="icon-sm text-emerald-400 mt-0.5 shrink-0">check</mat-icon>
                  <span><strong>Memoria RAM:</strong> 2 GB mínimo (funciona con total fluidez en equipos modestos de mostrador).</span>
                </li>
                <li class="flex items-start gap-3">
                  <mat-icon class="icon-sm text-emerald-400 mt-0.5 shrink-0">check</mat-icon>
                  <span><strong>Espacio en Disco:</strong> Menos de 200 MB para el ejecutable y la base de datos local SQLite 3.</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Arquitectura: x64</span>
              <span class="text-emerald-400">Sin servidores externos</span>
            </div>
          </div>

          <!-- Pasos para empezar -->
          <div class="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-xl flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-orange-600/20 text-orange-400 flex items-center justify-center mb-5">
                <mat-icon class="text-2xl">rocket_launch</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">
                Instalación en 3 Pasos
              </h3>
              <ol class="space-y-4 text-xs sm:text-sm text-slate-300">
                <li class="flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <div>
                    <strong class="text-white block mb-0.5">Descarga el instalador</strong>
                    <span>Usa los botones superiores de descarga para obtener el (.exe).</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <div>
                    <strong class="text-white block mb-0.5">Instala e inicia tu prueba gratis</strong>
                    <span>Ábrelo y comienza a registrar productos y ventas de inmediato con 7 días de prueba completa.</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <div>
                    <strong class="text-white block mb-0.5">Elige tu licencia (Mensual o Anual)</strong>
                    <span>Solicita tu clave de activación o negocia tu licencia exclusiva por WhatsApp.</span>
                  </div>
                </li>
              </ol>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Instalación: Inmediata</span>
              <span class="text-blue-400">Prueba de 7 días activa</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class DownloadSection {}
