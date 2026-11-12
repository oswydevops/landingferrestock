import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="licencia" class="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado de la Sección -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
            Licencias & Precios
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            Estructura informativa de licencias para FerreStock. El software incluye 7 días de prueba gratuita al instalarlo.
          </p>
        </div>

        <!-- Barra Informativa de Tasas de Cambio Oficiales -->
        <div class="max-w-5xl mx-auto mb-8 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div class="flex items-center gap-2 text-slate-700">
            <mat-icon class="text-blue-600 text-base">currency_exchange</mat-icon>
            <span class="font-semibold">Las tasas de cambio para el pago será respecto a la plataforma el TOQUE.</span>
          </div>
        </div>

        <!-- Grid de las 3 Licencias Compactas (Mensual, Anual y Exclusiva - Informativas) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          
          <!-- Tarjeta 1: Licencia Mensual -->
          <div class="rounded-2xl p-5 bg-slate-50 border border-blue-500/40 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
              Mensual
            </div>

            <div>
              <div class="text-[11px] font-bold text-blue-700 uppercase tracking-wide mb-1">
                Modalidad Básica
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-1.5">Licencia Mensual</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Suscripción flexible para comercios con renovación mes a mes.
              </p>

              <!-- Precio compacto -->
              <div class="p-3 rounded-xl bg-white border border-slate-200 mb-4">
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-xs text-slate-500 font-medium">Precio:</span>
                  <div class="text-xl font-black text-slate-900 font-mono tracking-tight">
                    $4.99 <span class="text-xs font-sans font-bold text-slate-500">USD/mes</span>
                  </div>
                </div>
              </div>

              <!-- Beneficios informativos concisos -->
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Punto de Venta Rápido (TPV) </span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Registro de productos al catálogo</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Control de IPV y alertas de existencias</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Opciones de respaldo local</span>
                </li>
              </ul>
            </div>

            <!-- Pie puramente informativo -->
            <div class="mt-4 pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500 font-medium">
              Pago Mensual
            </div>
          </div>

          <!-- Tarjeta 2: Licencia Anual (NUEVA ENTRE LAS DOS) -->
          <div class="rounded-2xl p-5 bg-emerald-50/50 border-2 border-emerald-500/60 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
              Anual · Ahorro
            </div>

            <div>
              <div class="text-[11px] font-bold text-emerald-700 uppercase tracking-wide mb-1">
                Recomendada
              </div>
              <h3 class="text-xl font-black text-slate-900 mb-1.5">Licencia Anual</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Un solo pago anual para operar tu negocio con continuidad y ahorro.
              </p>

              <!-- Precio compacto -->
              <div class="p-3 rounded-xl bg-white border border-slate-200 mb-4">
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-xs text-slate-500 font-medium">Precio:</span>
                  <div class="text-xl font-black text-slate-900 font-mono tracking-tight">
                    $53.99 <span class="text-xs font-sans font-bold text-slate-500">USD/anual</span>
                  </div>
                </div>
              </div>

              <!-- Beneficios informativos concisos -->
              <ul class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Todas las funciones de la plataforma</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Punto de Venta (TPV)</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Cierre de caja con desglose de billetes</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Soporte 24/7 y actualizaciones anuales</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Sin cortes ni renovaciones mes a mes</span>
                </li>
              </ul>
            </div>

            <!-- Pie puramente informativo -->
            <div class="mt-4 pt-3 border-t border-slate-200 text-center text-[11px] text-emerald-700 font-medium">
              Un solo pago anual, sin renovaciones mensuales
            </div>
          </div>

          <!-- Tarjeta 3: Licencia Exclusiva -->
          <div class="rounded-2xl p-5 bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
              Empresarial
            </div>

            <div>
              <div class="text-[11px] font-bold text-amber-400 uppercase tracking-wide mb-1">
                A Medida & Perpetua
              </div>
              <h3 class="text-xl font-black text-white mb-1.5">Licencia Exclusiva</h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">
                Para almacenes o negocios con requisitos a medida.
              </p>

              <!-- Condición de precio compacta -->
              <div class="p-3 rounded-xl bg-slate-800/90 border border-slate-700 mb-4">
                <div class="flex items-baseline justify-between mb-1.5">
                  <span class="text-xs text-slate-400 font-medium">Condición:</span>
                  <div class="text-xl font-black text-amber-400 tracking-tight">
                    Negociable
                  </div>
                </div>
                <p class="text-[10px] text-slate-300 leading-normal border-t border-slate-700/80 pt-1.5">
                  Precio acordado según adaptaciones requeridas por el cliente.
                </p>
              </div>

              <!-- Beneficios informativos concisos -->
              <ul class="space-y-2 text-xs text-slate-200">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-amber-400 shrink-0 mt-0.5">verified</mat-icon>
                  <span class="leading-normal">Licencia perpetua sin cuotas mensuales ni anuales</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-amber-400 shrink-0 mt-0.5">verified</mat-icon>
                  <span class="leading-normal">Soporte prioritario VIP 24/7 con el equipo de desarrollo</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-amber-400 shrink-0 mt-0.5">verified</mat-icon>
                  <span class="leading-normal">Módulos y reportes contables personalizados</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-amber-400 shrink-0 mt-0.5">verified</mat-icon>
                  <span class="leading-normal">Flexibilidad de pago en CUP, USD o Clásica</span>
                </li>
              </ul>
            </div>

            <!-- Pie puramente informativo -->
            <div class="mt-4 pt-3 border-t border-slate-800 text-center text-[11px] text-slate-400 font-medium">
              Un pago único permanente
            </div>
          </div>

        </div>



      </div>
    </section>
  `
})
export class Pricing {
  // Tasas oficiales solicitadas:
  // USD a CUP: 925
  // USD a Clásica: 1.16
  readonly rateCup = signal<number>(925);
  readonly rateClasica = signal<number>(1.16);

  // Precio mensual: 4.99 USD
  readonly monthlyPriceCup = computed(() => {
    const val = 4.99 * this.rateCup();
    return Math.round(val).toLocaleString('en-US');
  });

  readonly monthlyPriceClasica = computed(() => {
    const val = 4.99 * this.rateClasica();
    return val.toFixed(2);
  });

  // Precio anual: 53.99 USD
  readonly annualPriceCup = computed(() => {
    const val = 53.99 * this.rateCup();
    return Math.round(val).toLocaleString('en-US');
  });

  readonly annualPriceClasica = computed(() => {
    const val = 53.99 * this.rateClasica();
    return val.toFixed(2);
  });
}
