/* ==========================================================================
   LANDING TEMPLATE
   ========================================================================== */

import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Importar servicios
import { SeoService } from '../../shared/services/seo.service';
import { LandingConfig } from '../../shared/models/landing-config.interface';

// Importar componentes
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
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
    NavbarComponent,
    FooterComponent,
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
        'NUEVA <br> <span class="text-outline">MARCA</span> <br> <span class="text-red">AQUÍ</span>',
      subtitle: 'Descripción breve de la propuesta de valor de la marca.',
      desktopImage: 'assets/brand/shared/placeholder-desktop.webp',
      mobileImage: 'assets/brand/shared/placeholder-mobile.webp',
      imageAlt: 'Banner principal de la nueva landing',
      primaryCtaText: 'VER CATÁLOGO',
      secondaryCtaText: 'CONTACTO',
      catalogUrl: '#',
      whatsappUrl: 'https://wa.me/529939805654',
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
      sameAs: ['https://www.facebook.com/mersolsureste'],
    },

    // Conectar con servicio SEO
    seo: {
      title: 'Nueva Marca | Mersol Sureste',
      description: 'Descripción SEO de la nueva landing.',
      ogImage: 'assets/brand/shared/og-placeholder.webp',
      canonicalUrl: 'https://mersolsureste.com.mx/landing-demo',
      pageTitle: 'Mersol | Nueva Marca',
    },

    contactForm: {
      email: 'ventas@mersolsureste.com.mx',
      id: 'landing-template',
    },

    footer: {
      contactInfo: {
        phone: '+52 993 980 5654',
        email: 'ventas@mersolsureste.com.mx',
        schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
      },
      productsCol1: [],
      productsCol2: [],
      socialNetworks: [
        { name: 'Facebook', url: 'https://www.facebook.com/MersolSuresteOficial' },
        { name: 'Instagram', url: 'https://www.instagram.com/mersolsureste/' },
      ],
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
      pageTitle: this.config.seo.pageTitle,
      description: this.config.seo.description,
      image: this.config.seo.ogImage,
      url: this.config.seo.canonicalUrl,
      schema: this.seoService.buildOrganizationSchema(this.config.business),
    });
    if (this.config.seo.faviconPath) {
      this.seoService.setFavicon(this.config.seo.faviconPath);
    }
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
