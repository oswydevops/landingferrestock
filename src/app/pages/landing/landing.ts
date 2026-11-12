import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { Pricing } from '../../components/pricing/pricing';
import { DownloadSection } from '../../components/download-section/download-section';
import { Faq } from '../../components/faq/faq';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-landing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Header,
    Hero,
    Features,
    Pricing,
    DownloadSection,
    Faq,
    Footer
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      <app-header />
      <main class="flex-1">
        <app-hero />
        <app-features />
        <app-pricing />
        <app-download-section />
        <app-faq />
      </main>
      <app-footer />
    </div>
  `
})
export class Landing {}
