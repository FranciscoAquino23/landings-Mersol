/* ==========================================================================
      LANDING PAGE LOGIC 
   ========================================================================== */

import { Component, AfterViewInit, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';

// Importar utilidades
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

// Importar servicios
import { SeoService } from '../../shared/services/seo.service';

// Importat componentes
import { HeroComponent } from '../../components/hero/hero.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { InfoComponent } from '../../components/info/info.component';
import { CategoryCarouselComponent } from '../../components/categories/category.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContactFormComponent } from '../../shared/components/contact-form/form.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { LocationsComponent } from '../../shared/components/locations/locations.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BannerComponent,
    InfoComponent,
    CategoryCarouselComponent,
    FeaturesComponent,
    ContactFormComponent,
    FaqComponent,
    TestimonialsComponent,
    CtaComponent,
    LocationsComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  private breakpointObserver = inject(BreakpointObserver);

  // Detectar dispositivo actual (Desktop / Mobile)
  public isMobile = toSignal(
    this.breakpointObserver.observe([Breakpoints.Handset]).pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private seoService: SeoService,
  ) {}

  // Capturar y guardar UTM's
  ngOnInit(): void {
    this.seoService.captureUtms();

    // Esquema JSON-LD
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mercado de la Soldadura del Sureste',
      alternateName: 'Mersol',
      url: 'https://mersolsureste.com.mx',
      logo: 'https://mersolsureste.com.mx/assets/brand/MERSOL.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+52-993-980-5654',
        contactType: 'sales',
        areaServed: 'MX',
        availableLanguage: 'Spanish',
      },
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    };

    // Esquema SEO
    this.seoService.setMetaTags({
      title: 'Austromex | Soluciones en abrasivos',
      description: 'Expertos en equipos de oxicorte, soldadura y gases industriales.',
      image: 'assets/landing/mersol-preview.webp',
      url: 'https://mersolsureste.com.mx',
      schema: organizationSchema,
    });
  }

  // Mapa de eventos (CTA)
  onCtaClick(buttonName: string): void {
    this.seoService.trackEvent('cta_click', {
      button_location: buttonName,
      page: 'home_landing',
    });
  }

  // Manejar scroll automático
  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }

  // Limpiar suscripciones para evitar memory leaks
  ngOnDestroy(): void {
    if (this.fragmentSub) {
      this.fragmentSub.unsubscribe();
    }
  }
}
