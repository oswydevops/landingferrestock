import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <section id="faq" class="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-balance">
            Resolvemos tus dudas sobre FerreStock
          </h2>
          <p class="mt-3 text-base sm:text-lg text-slate-600 text-pretty">
            Todo lo que necesitas saber sobre el funcionamiento offline, la licencia y la compatibilidad de hardware.
          </p>
        </div>

        <!-- Acordeón interactivo accesible -->
        <div class="space-y-3">
          @for (item of faqs; track item.id) {
            <div class="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200">
              <button
                type="button"
                (click)="toggleFaq(item.id)"
                class="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 focus:outline-none transition-colors">
                <span class="text-base sm:text-lg">{{ item.question }}</span>
                <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200"
                  [class.rotate-180]="openId() === item.id">
                  <mat-icon class="text-xl">keyboard_arrow_down</mat-icon>
                </span>
              </button>

              @if (openId() === item.id) {
                <div class="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                  {{ item.answer }}
                </div>
              }
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class Faq {
  readonly openId = signal<string | null>('0');

  readonly faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: '¿Necesito conexión a internet para usar FerreStock en el mostrador?',
      answer: 'No, en absoluto. FerreStock es una aplicación de escritorio nativa 100% offline. Toda la base de datos se guarda localmente en tu computadora. No necesitas conexión para despachar ventas, registrar mercancía, ver tickets, ni realizar el cierre de caja.'
    },
    {
      id: 'faq-2',
      question: '¿Cómo funciona el Cierre de Caja con desglose de billetes?',
      answer: 'FerreStock cuenta con una calculadora facial adaptada a las 8 denominaciones oficiales de billetes en Cuba ($20,000, $10,000, $5,000, $2,000, $1,000, $500, $200 y $100 CUP). Solo debes indicar cuántos billetes tienes de cada uno; el sistema suma el efectivo, cruza contra transferencias (EnZona / Transfermóvil), descuenta devoluciones y te confirma si la caja está cuadrada al centavo.'
    },
    {
      id: 'faq-3',
      question: '¿Qué sucede si hay un apagón o se corta la electricidad de golpe?',
      answer: 'No pasa nada, gracias a que la base de datos es local cada transacción se escribe de inmediato en disco de forma atómica. Tu información nunca se corrompe ni se pierde ante cortes repentinos de corriente.'
    },
    {
      id: 'faq-4',
      question: '¿Es compatible con lectores de códigos de barra e impresoras de tickets?',
      answer: 'No, aun esta funcion está en proceso de desarrollo con la que se podrá utilizar cualquier pistola lectora de código de barras USB o Bluetooth estándar (emulación de teclado Plug & Play). También es compatible con impresoras térmicas de recibos de 58mm y 80mm e impresoras convencionales para reportes en formato Excel y PDF.'
    },
    {
      id: 'faq-5',
      question: '¿Cuáles son los tipos de licencias y facilidades de pago disponibles?',
      answer: 'Ofrecemos tres modalidades adaptadas a tu negocio: 1) Licencia Mensual por 4.99 USD/mes para renovación flexible; 2) Licencia Anual por 53.99 USD/año con 12 meses de servicio continuo y ahorro garantizado; y 3) Licencia Exclusiva a negociar para cadenas o empresas que requieran módulos a medida y pago perpetuo. Incluye 7 días de prueba desde el primer día de uso de la plataforma.'
    },
    {
      id: 'faq-6',
      question: '¿Cómo hago copias de seguridad de mis datos contables?',
      answer: 'Desde el módulo de Configuración puedes generar con un solo clic una copia íntegra en formato .json o base de datos. Puedes guardar ese archivo en tu disco duro o copiarlo a una memoria USB para máxima tranquilidad.'
    },
    {
      id: 'faq-7',
      question: '¿Qué métodos de pagos se aceptan?',
      answer: 'Actualmente aceptamos pagos mediante en CUP y USD Clásica mediante las plataformas Transfermóvil y EnZona. Próximamente se habilitarán pagos con otras pasarelas de pago.'
    },
    {
      id: 'faq-8',
      question: '¿Como se realiza el pago de las licencias?',
      answer: 'Desde el módulo de configuración luego de completar la información de (Negocio y Usuario) entonces pasará a la sección de activación de licencia, se escogerá la licencia a pagar, luego se realizará la transferencia a cualquiera de las cuentas que aparecen según la moneda a pagar y el monto del precio según la tasa de cambios y luego deberá ir al botón que lleva al whatsapp de soporte con un mensaje predeterminado que lleva al chat y deberá adjuntar la captura de pantalla del pago para verificar el mismo y entregarle su código de activación.'
    }
  ];

  toggleFaq(id: string): void {
    this.openId.update(current => (current === id ? null : id));
  }
}
