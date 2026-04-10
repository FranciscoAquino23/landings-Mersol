/* ==========================================================================
<<<<<<< HEAD
   LANDING TEMPLATE LOGIC
=======
   LANDING TEMPLATE LOGIC
>>>>>>> 9fbbb94d98a55a9ae8e9f360ee16f4f4b639502e
   =========================================================================*/

import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Importar servicios
import { SeoService } from '../../shared/services/seo.service';
import { LandingConfig } from '../../shared/models/landing-config.interface';

// Importar componentes
import { HeroComponent } from '../../components/hero/hero.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { InfoComponent } from '../../components/info/info.component';
import { CategoryCarouselComponent } from '../../components/categories/category.component';
import { FeaturesComponent } from '../../shared/components/features/features.component';
import { ContactFormComponent } from '../../shared/components/contact-form/form.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { LocationsComponent } from '../../shared/components/locations/locations.component';

@Component({
  selector: 'app-landing-template',
  standalone: true,
  imports: [
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
  templateUrl: './landing-template.component.html',
  styleUrl: './landing-template.component.scss',
})
export class LandingTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  // Configurar nuevas landings
  protected config: LandingConfig = {
    basePath: '/landing-demo',

    // Configurar colores de la nueva landing (color principal / secundario / texto)
    colors: {
      primary: '#d2242a',
      primaryHover: '#b11d22',
      secondary: '#403b33',
    },

    // Información del componente principal (Hero)
    hero: {
      title:
        'SOLUCIONES <br> <span class="text-outline">INDUSTRIALES</span> <br> <span class="text-red">ALTA CALIDAD</span>',
      subtitle: 'Expertos en soldadura y abrasivos para el sureste mexicano.',
      desktopImage: 'assets/brand/austromex/logos-austromex/banner-desktop.webp',
      mobileImage: 'assets/brand/austromex/logos-austromex/banner-mobile.webp',
      primaryCtaText: 'VER CATÁLOGO',
      secondaryCtaText: 'CONTACTO',
      catalogUrl: 'https://austromex.com.mx/download/v/catalogos/CatalogoAustromex_2026_low.pdf',
      whatsappUrl:
        'https://wa.me/529939805654?text=Hola%20Mersol!%20Vengo%20de%20su%20p%C3%A1gina%20web.%20Me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos.',
      stats: {
        value: '+18',
        label: 'AÑOS DE EXPERIENCIA',
        description: 'Liderando el mercado industrial en el sureste.',
      },
    },

    // Información del componente info (Nosotros)
    business: {
      name: 'Mercado de la Soldadura del Sureste',
      alternateName: 'Mersol',
      phone: '+52-993-980-5654',
      email: 'ventas@mersolsureste.com.mx',
      website: 'https://mersolsureste.com.mx',
      logo: 'https://mersolsureste.com.mx/assets/brand/MERSOL.svg',
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    },

    // Conectar con servicio SEO
    seo: {
      title: 'Austromex | Soluciones en Soldadura y Abrasivos',
      description: 'Expertos en equipos de oxicorte, soldadura y gases industriales.',
      ogImage: 'assets/brand/austromex/mersol-preview.webp',
      canonicalUrl: 'https://mersolsureste.com.mx',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private seoService: SeoService,
  ) {}

  // Capturar UTM'S
  ngOnInit(): void {
    this.seoService.captureUtms();

    // Llamar al servicio SEO para los metadatos
    this.seoService.setMetaTags({
      title: this.config.seo.title,
      description: this.config.seo.description,
      image: this.config.seo.ogImage,
      url: this.config.seo.canonicalUrl,
      schema: this.seoService.buildOrganizationSchema(this.config.business),
    });
  }

  // Iniciar scroll automático al resto de secciones dentro de la landing
  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => this.viewportScroller.scrollToAnchor(fragment), 100);
      }
    });
  }

  // Limpiar componente
  ngOnDestroy(): void {
    this.fragmentSub?.unsubscribe();
  }
}
