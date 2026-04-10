/* ==========================================================================
   LANDING AUSTROMEX STRUCTURE
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
  selector: 'app-landing',
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
  templateUrl: './landing-austromex.component.html',
  styleUrl: './landing-austromex.component.scss',
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  /* =========================================================================
     CONFIGURACIÓN DE MARCA AUSTROMEX 
     ========================================================================= */
  protected config: LandingConfig = {
    basePath: '/austromex',

    colors: {
      primary: '#d2242a',
      primaryHover: '#b11d22',
      secondary: '#403b33',
    },

    // Información componente Hero
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

    // Información componente Navbar
    business: {
      name: 'Mercado de la Soldadura del Sureste',
      alternateName: 'Mersol',
      phone: '+52-993-980-5654',
      email: 'ventas@mersolsureste.com.mx',
      website: 'https://mersolsureste.com.mx',
      logo: 'https://mersolsureste.com.mx/assets/brand/MERSOL.svg',
      brandLogoNavbar: 'assets/brand/austromex/logos-austromex/AUSTROMEX.svg',
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    },

    // Información servicio SEO
    seo: {
      title: 'Austromex | Soluciones en Soldadura y Abrasivos',
      description: 'Expertos en equipos de oxicorte, soldadura y gases industriales.',
      ogImage: 'assets/brand/austromex/mersol-preview.webp',
      canonicalUrl: 'https://mersolsureste.com.mx',
      pageTitle: 'Mersol | Abrasivos Austromex',
      faviconPath: 'assets/brand/austromex/logos-austromex/favicon.png',
    },

    // Información componente Banner
    banner: {
      tagline: 'DISTRIBUIDOR AUTORIZADO AUSTROMEX',
      promos: [
        {
          id: 1,
          titulo: 'Promo Austromex - Envío Gratis',
          imgDesktop: 'assets/brand/austromex/promo-austromex/promoH1.webp',
          imgMobile: 'assets/brand/austromex/promo-austromex/promoV1.webp',
          link: 'https://mersolsureste.com.mx/tienda',
          alt: 'Promoción envío gratis Austromex',
        },
        {
          id: 2,
          titulo: 'Nueva Colección Industrial',
          imgDesktop: 'assets/brand/austromex/promo-austromex/promoH2.webp',
          imgMobile: 'assets/brand/austromex/promo-austromex/promoV2.webp',
          link: 'https://mersolsureste.com.mx/tienda',
          alt: 'Nuevos productos industriales Mersol',
        },
      ],
    },

    // Información componente Category
    categories: [
      {
        title: 'ABRASIVOS SÓLIDOS',
        image: 'assets/brand/austromex/categories-austromex/01.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'PRODUCTOS DE LIJA',
        image: 'assets/brand/austromex/categories-austromex/02.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'PRODUCTOS DE FIBRA',
        image: 'assets/brand/austromex/categories-austromex/03.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'PULIDO Y LIMPIEZA',
        image: 'assets/brand/austromex/categories-austromex/04.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'ESTÉTICA AUTOMOTRIZ',
        image: 'assets/brand/austromex/categories-austromex/05.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'CONSTRUCCIÓN',
        image: 'assets/brand/austromex/categories-austromex/06.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'SUPERABRASIVOS',
        image: 'assets/brand/austromex/categories-austromex/07.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'INDUSTRIA AUTOMOTRIZ',
        image: 'assets/brand/austromex/categories-austromex/08.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'CEPILLOS DE ALAMBRE',
        image: 'assets/brand/austromex/categories-austromex/09.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'HERRAMIENTAS',
        image: 'assets/brand/austromex/categories-austromex/10.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'MÁQUINAS',
        image: 'assets/brand/austromex/categories-austromex/11.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
      {
        title: 'ACCESORIOS',
        image: 'assets/brand/austromex/categories-austromex/12.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
      },
    ],

    // Información componente Info (Nosotros)
    info: {
      subtitle: 'Liderazgo y Respaldo Regional',
      sectionTitle: 'Trayectoria de Excelencia',
      mainDescription:
        'Nuestra alianza estratégica con Grupo Austromex nos permite elevar la productividad de tu industria mediante soluciones técnicas certificadas y un soporte técnico especializado.',
      stats: [
        { endValue: 60, suffix: '+', label: 'Años de Liderazgo', highlight: true },
        { endValue: 18, suffix: '+', label: 'Presencia Mersol', highlight: false },
        { endValue: 2800, suffix: '+', label: 'Productos en Catálogo', highlight: false },
        { endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
      ],
      certificaciones: [
        {
          nombre: 'oSa Alemania',
          subtitulo: 'Seguridad Abrasiva',
          desc: 'Garantiza que cada herramienta es fabricada bajo estándares de seguridad, con trazabilidad total y pruebas de resistencia extremas.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'ISO 9001',
          subtitulo: 'Gestión de Calidad',
          desc: 'Certifica un sistema enfocado en la excelencia operativa y la mejora continua para entregar productos consistentes de alta calidad.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'ISO 45001',
          subtitulo: 'Salud y Seguridad',
          desc: 'Valida un entorno laboral seguro que previene riesgos laborales, protegiendo la integridad de todos nuestros colaboradores.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
      ],
      certSectionTitle: 'Seguridad y Calidad Avalada Internacionalmente',
      certSectionDesc:
        'Nuestras operaciones y productos cumplen con las normativas globales más exigentes del sector industrial.',
      quote: '"Tu éxito es el nuestro"',
      quoteAuthor: '— Grupo Austromex & Mersol Sureste',
    },

    // Información componente Features
    features: {
      overline: 'VALOR AGREGADO',
      title: '¿POR QUÉ ELEGIR<br />MERSOL SURESTE?',
      description:
        'Soluciones integrales con el respaldo de las mejores marcas del mercado industrial.',
      mainFeatures: [
        {
          icon: 'crosshairs.svg',
          title: 'Tecnología de Punta',
          desc: 'Herramientas y máquinas de calidad.',
        },
        {
          icon: 'cart.svg',
          title: 'Logística Eficiente',
          desc: 'Entregas garantizadas en todo el país.',
        },
        {
          icon: 'user.svg',
          title: 'Respaldo Total',
          desc: 'Garantía y soporte técnico especializado.',
        },
        {
          icon: 'hammer.svg',
          title: 'Asesoría Experta',
          desc: 'Certificados para optimizar tus procesos.',
        },
      ],
      pillarFeatures: [
        {
          icon: 'truck.svg',
          title: 'Logística de Respuesta',
          desc: 'Garantizamos stock y entregas eficientes.',
        },
        {
          icon: 'shield.svg',
          title: 'Confianza Certificada',
          desc: 'Nuestros procesos y productos están certificados.',
        },
        {
          icon: 'globe.svg',
          title: 'Innovación Sustentable',
          desc: 'Reducimos el impacto ambiental.',
        },
      ],
    },

    // Información componente FAQ
    faq: {
      items: [
        {
          pregunta: '¿Qué es Mersol Sureste y qué tipo de soluciones ofrece?',
          respuesta:
            'Empresa especializada en soluciones industriales, enfocada en soldadura, corte, herramientas, abrasivos y equipo de protección personal.',
        },
        {
          pregunta: '¿En qué sectores industriales tiene experiencia Mersol Sureste?',
          respuesta:
            'Atendemos sectores como metalmecánico, construcción, manufactura, mantenimiento industrial y energía.',
        },
        {
          pregunta: '¿Los productos son originales y cuentan con garantía de fábrica?',
          respuesta:
            'Sí, todos nuestros productos son 100% originales y cuentan con garantía directa del fabricante.',
        },
        {
          pregunta: '¿Manejan productos especializados o bajo pedido?',
          respuesta:
            'Sí, podemos conseguir equipos y consumibles especializados bajo pedido según tus necesidades.',
        },
        {
          pregunta: '¿Realizan envíos a toda la República Mexicana?',
          respuesta: 'Sí, realizamos envíos a todo México con opciones rápidas y seguras.',
        },
        {
          pregunta: '¿Puedo recoger mi pedido en sucursal?',
          respuesta: 'Sí, puedes recoger directamente en cualquiera de nuestras sucursales.',
        },
        {
          pregunta: '¿Manejan precios especiales por volumen o mayoreo?',
          respuesta:
            'Sí, ofrecemos precios preferenciales para compras por volumen y clientes recurrentes.',
        },
        {
          pregunta: '¿Ofrecen crédito a empresas?',
          respuesta: 'Sí, contamos con opciones de crédito sujetas a evaluación.',
        },
        {
          pregunta: '¿Venden refacciones originales?',
          respuesta:
            'Sí, manejamos refacciones originales para asegurar el correcto funcionamiento de tus equipos.',
        },
        {
          pregunta: '¿Atienden proyectos industriales o compras a gran escala?',
          respuesta:
            'Sí, brindamos atención especializada para proyectos industriales y compras de alto volumen.',
        },
      ],
    },

    // Información componente Testimonials
    testimonials: [
      {
        quote: 'Excelente precios en gases y equipos de oxicorte, aquí encontré lo que buscaba',
        author: 'Moises Santamaria',
        location: 'Sucursal - Campeche',
        rating: 5,
      },
      {
        quote: 'Gran variedad tanto de marcas y productos, siempre encuentras lo que buscas',
        author: 'Claudia Caraveo',
        location: 'Sucursal - CEDIS Mérida',
        rating: 5,
      },
      {
        quote: 'Exelente para encontrar las refacciones y equipos',
        author: 'Jose Reyes Lopez Jimenez',
        location: 'Sucursal - Villahermosa',
        rating: 4,
      },
      {
        quote: 'Todo en materia de herramientas y seguridad industrial',
        author: 'FREDY SPARX (SPARX)',
        location: 'Sucursal - Villahermosa',
        rating: 5,
      },
      {
        quote: 'Una tienda grande especializada en herramientas industriales a un precio justo',
        author: 'Carlos Arias',
        location: 'Sucursal - Villahermosa',
        rating: 4,
      },
      {
        quote:
          'Es una tienda especializada en insumos y herramientas para la industria, una excelente opción para las medianas y grandes empresas',
        author: 'Carlos Cisneros',
        location: 'Sucursal - Villahermosa',
        rating: 5,
      },
      {
        quote: 'Muy bien surtidos en materiales, herramientas y refacciones',
        author: 'Jose Grethel Ramirez Alcazar',
        location: 'Sucursal - Villahermosa',
        rating: 5,
      },
    ],

    // Información componente CTA (Call To Action)
    cta: {
      title: '¿BUSCAS CALIDAD Y SEGURIDAD PARA LLEVAR TU PRODUCTIVIDAD AL SIGUIENTE NIVEL?',
      whatsappPhone: '529939805654',
      whatsappMessage:
        'Hola Mersol! Vengo de su página Austromex. Me interesa obtener una asesoría industrial.',
    },

    // Información componente Locations (Sucursales)
    locations: [
      {
        name: 'Villahermosa, TAB',
        address: 'Av. Ruiz Cortines 2001-B, Col. Atasta, Villahermosa, TAB, C.P. 86100',
        phone: '(993) 354-4023 • (993) 354-7657 • (993) 161-4479',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d948.7070888024072!2d-92.95968200000002!3d17.986721!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85edd7899875a39f%3A0x27cd52aa1ad690b6!2sMersol%20Sureste%20Villahermosa!5e0!3m2!1ses-419!2sus!4v1775078801107!5m2!1ses-419!2sus',
      },
      {
        name: 'Veracruz, VER',
        address: 'Manuel de Jesús Clouthier 5417 L-15, Col. Amapolas, Veracruz, VER, C.P. 91698',
        phone: '(229) 920-8577 • (229) 931-1630 • (229) 260-8910',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.10905557776897!2d-96.1922!3d19.15706!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85c34127b4214919%3A0x58189403ee35a26b!2sMersol%20Sureste%20Veracruz!5e0!3m2!1ses-419!2sus!4v1775078669935!5m2!1ses-419!2sus',
      },
      {
        name: 'Mérida, YUC',
        address: 'Perif. de Mérida Lic. Manuel Berzunza SN, Tixcacal Opichen, 97314 Mérida, Yuc.',
        phone: '(999) 400-5855',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.4780136846819!2d-89.67493617320106!3d20.994399705770117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x8f5673c32eb817b3%3A0x33906a9f81e7b8a0!2sPerif.%20de%20M%C3%A9rida%20Lic.%20Manuel%20Berzunza%2C%20Yucat%C3%A1n!5e0!3m2!1ses-419!2smx!4v1775149557618!5m2!1ses-419!2smx',
      },
      {
        name: 'Apodaca, NL',
        address: 'Regioavenida 116, Regio Parque Industrial, Cd. Apodaca, NL, C.P. 66633',
        phone: '(81) 8123-1164 • (81) 8123-1215',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d898.438239431687!2d-100.216262!3d25.745682!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x866295ed8d561cb3%3Ab253f4f5e95bb375!2sMersol%20Sureste%20CEDIS%20APODACA!5e0!3m2!1ses-419!2sus!4v1775078631827!5m2!1ses-419!2sus',
      },
      {
        name: 'Campeche, CAM',
        address: 'Av. Gobernadores 72, Col. Santa Lucia, Campeche, CAM, C.P. 24020',
        phone: '(981) 827-9038',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.5591245016365!2d-90.506222!3d19.842238!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85f831b15429c451%3A0xd25968b749d6560b!2sMersol%20Sureste%20Campeche!5e0!3m2!1ses-419!2sus!4v1775078841190!5m2!1ses-419!2sus',
      },
      {
        name: 'Paraíso, TAB',
        address: 'Carretera Paraíso - Dos Bocas KM 1 S/N, Col. El Limón, Paraíso, TAB, C.P. 86600',
        phone: '(933) 333-4692 • (933) 333-4564 • (933) 333-4942',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d473.21202703886235!2d-93.215647!3d18.406672!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85ee8fa936e38025%3A0x9c06480451266e81!2sMersol%20Sureste%20Para%C3%ADso!5e0!3m2!1ses-419!2sus!4v1775078771604!5m2!1ses-419!2sus',
      },
      {
        name: 'Tula, HGO',
        address:
          'Ctra. Federal Tula - Refinería Km 4.5, El Llano, 2da. sección, Tula de Allende, HGO, C.P. 42803',
        phone: '(773) 688-2091 • (773) 688-3089',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.4798639267234!2d-99.295963!3d20.057189!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85d22d04181e4587%3A0x5dfc38ceeb6ef77c!2sMersol%20Sureste%20Tula%20de%20Allende!5e0!3m2!1ses-419!2sus!4v1775078581714!5m2!1ses-419!2sus',
      },
    ],

    // Información componente ContactForm (Formulario)
    contactForm: {
      email: 'ventas@mersolsureste.com.mx',
      id: 'landing-austromex',
    },

    // Información componente Footer
    footer: {
      brandLogoWhite: 'assets/brand/austromex/logos-austromex/AUSTROMEX.svg',
      contactInfo: {
        phone: '+52 993 980 5654',
        email: 'ventas@mersolsureste.com.mx',
        schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
      },
      productsCol1: [
        { label: 'Abrasivos Sólidos', url: 'solidos' },
        { label: 'Productos de Lija', url: 'lija' },
        { label: 'Productos de Fibra', url: 'fibra' },
        { label: 'Pulido y Limpieza', url: 'pulido' },
        { label: 'Estética Automotriz', url: 'estetica' },
        { label: 'Construcción', url: 'construccion' },
      ],
      productsCol2: [
        { label: 'Superabrasivos', url: 'superabrasivos' },
        { label: 'Industria Automotriz', url: 'rectificado' },
        { label: 'Cepillos de Alambre', url: 'cepillos' },
        { label: 'Herramientas', url: 'herramientas' },
        { label: 'Máquinas', url: 'maquinas' },
        { label: 'Accesorios', url: 'accesorios' },
      ],
      socialNetworks: [
        { name: 'Facebook', url: 'https://www.facebook.com/MersolSuresteOficial' },
        { name: 'Instagram', url: 'https://www.instagram.com/mersolsureste/' },
        { name: 'Youtube', url: 'https://www.youtube.com/@mersolsureste4375' },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/company/mersolsureste/posts/?feedView=all',
        },
      ],
    },
  };

  // Constructor de la landing-page Austromex
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private seoService: SeoService,
  ) {}

  // Iniciar componentes
  ngOnInit(): void {
    this.seoService.captureUtms();
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

  // Mantener una Single Page Application (SPA)
  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => this.viewportScroller.scrollToAnchor(fragment), 100);
      }
    });
  }

  // Limpiar componentes
  ngOnDestroy(): void {
    this.fragmentSub?.unsubscribe();
  }
}
