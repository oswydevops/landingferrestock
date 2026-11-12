import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <!-- Sección de Comparativa: ¿Por qué FerreStock? -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mb-12">
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Resolviendo el reto real del mostrador</span>
            <span aria-hidden="true">·</span>
            <span>Diseñado para el comercio actual</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Administrar un negocio de cualquier tipo no debería ser una pesadilla diaria
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            Las libretas en papel, las hojas de cálculo improvisadas y los sistemas web dependientes de internet causan descuadres de dinero y mercancía. FerreStock fue diseñado específicamente para eliminar esos cuellos de botella.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Problema 1: Cortes de red -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">wifi_off</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Cero dependencia de internet</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              No te quedes sin facturar cuando falle la red, caiga la señal móvil o se corte la luz. FerreStock corre 100% en tu computadora con motor local.
            </p>
          </div>

          <!-- Problema 2: Desglose de billetes CUP -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">account_balance_wallet</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Desglose de billetes por denominación</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Calculadora especializada por valor facial ($20,000 hasta $100 CUP). Ingresa la cantidad de piezas y el sistema cruza contra ventas en efectivo y transferencias EnZona/Transfermóvil.
            </p>
          </div>

          <!-- Problema 3: Control IPV Estricto -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">inventory</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Balance de IPV al centavo</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Conoce el saldo inicial, las entradas del día, las piezas vendidas y el stock final de cada renglón. Detecta fugas o faltantes antes de cerrar la jornada.
            </p>
          </div>

          <!-- Problema 4: Mostrador vs Almacén -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">warehouse</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Mostrador vs Almacén</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Separa las existencias exhibidas para venta rápida de las reservas guardadas en almacén. Reabastece el mostrador sin perder el conteo total del negocio.
            </p>
          </div>

          <!-- Problema 5: Devoluciones y Mermas -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">assignment_return</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Mermas y garantías</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Si un artículo devuelto está roto va a mermas; si está sano reingresa a existencias. El dinero reembolsado se descuenta automáticamente del arqueo de caja según el método de pago que usó el cliente para la compra del mismo.
            </p>
          </div>

          <!-- Ventaja 6: Tarifas accesibles -->
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors">
            <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <mat-icon class="text-xl">price_check</mat-icon>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Licencias desde $4.99 USD</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Olvida las plataformas SaaS de $50 al mes. Elige entre una cuota mensual de solo $4.99 USD (al cambio en CUP o Clásica), una licencia anual con un ahorro del 20% o una licencia exclusiva a negociar.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Sección de Módulos Operativos (Bento Grid) -->
    <section id="funciones" class="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Módulos de ingeniería contable</span>
            <span aria-hidden="true">·</span>
            <span>Arquitectura robusta</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-balance">
            Todo lo que necesitas en una sola aplicación de escritorio
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            Cada sección de FerreStock está diseñada para resolver tareas críticas de mostrador con velocidad nativa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Módulo 1: TPV Mostrador -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">point_of_sale</mat-icon>
                </span>
                <span class="text-xs font-bold text-blue-700 uppercase tracking-wide">Punto de Venta</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">1. Venta Rápida de Mostrador</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                Despacha a clientes en cuestión de segundos. Añade productos directamente desde el catálogo del módulo de venta (TPV).
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Cobro en Efectivo, Transferencia o Mixto</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Cálculo automático de vuelto en CUP</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Detalles de la transacción</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Módulo TPV</span>
              <span class="text-[11px] font-mono text-slate-400">100% Offline</span>
            </div>
          </article>

          <!-- Módulo 2: Cierre de Caja CUP -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">payments</mat-icon>
                </span>
                <span class="text-xs font-bold text-emerald-700 uppercase tracking-wide">Cuadre Diario</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">2. Cierre de Caja con Billetes</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                El único sistema con desglose exacto de las denominaciones en Pesos Cubanos: $20,000, $10,000, $5,000, $2,000, $1,000, $500, $200, $100, $50 y $20.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Suma instantánea por denominación de billete</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Cruce contra transferencias EnZona / Transfermóvil</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Detección de descuadre: Sobrante o Faltante</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Cierre en CUP</span>
              <span class="text-[11px] font-mono text-slate-400">Cuadre Exacto</span>
            </div>
          </article>

          <!-- Módulo 3: IPV del Día -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">table_chart</mat-icon>
                </span>
                <span class="text-xs font-bold text-orange-700 uppercase tracking-wide">Control IPV</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">3. Control de IPV de la Jornada</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                Módulo formal de Inventario Periódico de Ventas para fiscalizar renglón por renglón el comportamiento de tu mercancía.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Cálculo automático de unidades despachadas</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Ganancias netas reales del día</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Detección de artículos bajo umbral mínimo</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Balance Contable</span>
              <span class="text-[11px] font-mono text-slate-400">Cálculo en vivo</span>
            </div>
          </article>

          <!-- Módulo 4: Catálogo y Almacén -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">category</mat-icon>
                </span>
                <span class="text-xs font-bold text-indigo-700 uppercase tracking-wide">Inventario</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">4. Catálogo </h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                Gestión estructurada de productos con código de identificación (PROD-001), categoría, precio oficial CUP y costo al proveedor.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Separación de existencias: Mostrador vs Almacén</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Umbral de stock mínimo de seguridad</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Categorización de productos</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Existencias Base</span>
              <span class="text-[11px] font-mono text-slate-400">Control físico</span>
            </div>
          </article>

          <!-- Módulo 5: Alertas y Reposición -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">notification_important</mat-icon>
                </span>
                <span class="text-xs font-bold text-amber-700 uppercase tracking-wide">Prevención</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">5. Alertas de Stock</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                Evita perder ventas por quiebre de stock. El sistema clasifica el inventario en tres niveles de prioridad operativa.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-red-500 shrink-0 mt-0.5">error</mat-icon>
                  <span class="leading-normal">Artículos agotados en cero (Urgencia máxima)</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-amber-500 shrink-0 mt-0.5">warning</mat-icon>
                  <span class="leading-normal">Advertencia para productos con bajo stock</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Referencias con existencias óptimas</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Control de Stock</span>
              <span class="text-[11px] font-mono text-slate-400">Reposición inmediata</span>
            </div>
          </article>

          <!-- Módulo 6: Reportes, SQLite y Respaldos -->
          <article class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <mat-icon class="text-2xl">security</mat-icon>
                </span>
                <span class="text-xs font-bold text-teal-700 uppercase tracking-wide">Seguridad Local</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">6. SQLite 3 WAL & Respaldo</h3>
              <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                Transacciones ACID locales que resisten cortes imprevistos de electricidad. Respaldo íntegro y reportes listos en Excel y PDF.
              </p>
              <ul class="space-y-2.5 text-xs text-slate-600">
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Exportación a Microsoft Excel y PDF</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Copia de seguridad en archivo .json local o USB</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <mat-icon class="icon-xs text-emerald-500 shrink-0 mt-0.5">check_circle</mat-icon>
                  <span class="leading-normal">Restauración completa transaccional en 1 clic</span>
                </li>
              </ul>
            </div>
            <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500">Base de Datos ACID</span>
              <span class="text-[11px] font-mono text-slate-400">Modo WAL Seguro</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  `
})
export class Features {}
