/* ==========================================================================
   LANDING DEWALT STRUCTURE
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
  selector: 'app-landing-dewalt',
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
  templateUrl: './landing-dewalt.component.html',
  styleUrl: './landing-dewalt.component.scss',
})
export class LandingDeWALTComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  /* =========================================================================
     CONFIGURACIÓN DE MARCA DEWALT 
     ========================================================================= */
  protected config: LandingConfig = {
    basePath: '/dewalt',

    // Información Styles
    colors: {
      primary: '#FFCD00',
      primaryHover: '#E6B800',
      secondary: '#272525',
    },

    // Información componente Hero
    hero: {
      title:
        'HERRAMIENTAS <br> <span class="text-outline">PROFESIONALES</span> <br> <span class="text-red">DEWALT</span>',
      subtitle: 'Potencia y durabilidad para los profesionales del sureste mexicano.',
      desktopImage: 'assets/landing/landing-dewalt/banner-desktop.webp',
      mobileImage: 'assets/landing/landing-dewalt/banner-mobile.webp',
      imageAlt: 'Herramientas profesionales DeWALT disponibles en Mersol Sureste',
      primaryCtaText: 'VER CATÁLOGO',
      secondaryCtaText: 'CONTACTO',
      catalogUrl: 'https://latam.dewalt.global/catalogo',
      whatsappUrl:
        'https://wa.me/529939805654?text=Hola%20Mersol!%20Me%20interesa%20informaci%C3%B3n%20sobre%20productos%20DeWALT.',
      stats: {
        value: '+18',
        label: 'AÑOS DE LIDERAZGO',
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
      brandLogoNavbar: 'assets/brand/dewalt/logos-dewalt/DEWALT.svg',
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    },

    // Información servicio SEO
    seo: {
      title: 'DeWALT en Mersol Sureste | Herramientas Profesionales',
      description:
        'Distribuidor autorizado DeWALT en el sureste mexicano. Taladros, sierras, herramientas eléctricas y accesorios profesionales con respaldo técnico.',
      ogImage: 'assets/landing/landing-dewalt/dewalt-preview.webp',
      canonicalUrl: 'https://mersolsureste.com.mx/dewalt',
      pageTitle: 'Mersol | DeWALT',
      faviconPath: 'assets/brand/dewalt/logos-dewalt/DEWALT.ico',
    },

    // Información componente Banner
    banner: {
      tagline: 'DISTRIBUIDOR AUTORIZADO DEWALT',
      promos: [
        {
          id: 1,
          titulo: 'Herramientas DeWALT — Envío Gratis',
          imgDesktop: 'assets/brand/dewalt/promo-dewalt/promoH1.webp',
          imgMobile: 'assets/brand/dewalt/promo-dewalt/promoV1.webp',
          link: 'https://www.dewalt.com.mx/es-mx',
          alt: 'Herramientas DeWALT disponibles en Mersol Sureste',
        },
      ],
    },

    // Información componente Category (Productos)
    categories: [
      {
        title: 'HERRAMIENTAS ELÉCTRICAS',
        image: 'assets/brand/dewalt/categories-dewalt/01.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/herramientas-electricas',
      },
      {
        title: 'HERRAMIENTAS MANUALES',
        image: 'assets/brand/dewalt/categories-dewalt/02.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/herramientas-manuales',
      },
      {
        title: 'JARDINERÍA',
        image: 'assets/brand/dewalt/categories-dewalt/03.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/jardineria',
      },
      {
        title: 'ALMACENAMIENTO Y ORGANIZACIÓN',
        image: 'assets/brand/dewalt/categories-dewalt/04.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/almacenamiento-y-organizacion',
      },
      {
        title: 'ANCLAJES Y FIJACIONES',
        image: 'assets/brand/dewalt/categories-dewalt/05.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/anclajes-y-fijaciones',
      },
      {
        title: 'EQUIPO DE SEGURIDAD PERSONAL',
        image: 'assets/brand/dewalt/categories-dewalt/06.webp',
        link: 'https://www.dewalt.com.mx/es-mx/productos/equipo-de-seguridad-personal',
      },
      {
        title: 'SISTEMAS',
        image: 'assets/brand/dewalt/categories-dewalt/07.webp',
        link: 'https://www.dewalt.com.mx/es-mx/sistemas/herramientas-inalambricas',
      },
    ],

    // Información componente Info (Nosotros)
    info: {
      subtitle: 'Liderazgo y Confianza Global',
      sectionTitle: 'Más de 70 Años de Innovación',
      mainDescription:
        'Nuestra alianza estratégica con DeWALT nos permite elevar la productividad de tu industria mediante soluciones técnicas certificadas y un soporte técnico especializado.',
      stats: [
        { endValue: 100, suffix: '+', label: 'Años de Liderazgo', highlight: true },
        { endValue: 18, suffix: '+', label: 'Presencia Mersol', highlight: false },
        { endValue: 1000, suffix: '+', label: 'Productos en Catálogo', highlight: false },
        { endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
      ],
      certificaciones: [
        {
          nombre: 'Perfom & Protect',
          subtitulo: 'Seguridad y Control',
          desc: 'Certifica el diseño de todas las herramientas ofreciendo el máximo nivel de protección, sin sacrificar la potencia del equipo.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'ISO 9001',
          subtitulo: 'Gestión de Calidad',
          desc: 'Certifica un sistema enfocado en la excelencia operativa y la mejora continua para entregar productos consistentes de alta calidad.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'DEWALT Guarantee',
          subtitulo: 'Garantía de 3 Años',
          desc: 'Respaldo directo con garantía extendida en servicios y herramientas.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
      ],
      certSectionTitle: 'Calidad y Seguridad Garantizada',
      certSectionDesc:
        'Cada herramienta DeWALT ha sido diseñada y probada bajo los estándares más exigentes de la industria global.',
      quote: '"Diseñadas por y para profesionales"',
      quoteAuthor: '— DeWALT & Mersol Sureste',
    },

    // Información componente Features
    features: {
      overline: 'VALOR AGREGADO',
      title: '¿POR QUÉ ELEGIR<br />DEWALT EN MERSOL?',
      description:
        'Herramientas profesionales respaldadas por el distribuidor autorizado con mayor presencia en el sureste mexicano.',
      mainFeatures: [
        {
          icon: 'crosshairs.svg',
          title: 'Precisión Industrial',
          desc: 'Equipos calibrados para exigencias de obra y taller profesional.',
        },
        {
          icon: 'cart.svg',
          title: 'Envío Garantizado',
          desc: 'Distribución express a toda la república con rastreo en tiempo real.',
        },
        {
          icon: 'user.svg',
          title: 'Servicio Técnico',
          desc: 'Garantía directa DeWALT y soporte especializado en sitio.',
        },
        {
          icon: 'hammer.svg',
          title: 'Asesoría Certificada',
          desc: 'Especialistas certificados para seleccionar la herramienta correcta.',
        },
      ],
      pillarFeatures: [
        {
          icon: 'truck.svg',
          title: 'Logística Express',
          desc: 'Stock disponible para entregas inmediatas en todo México.',
        },
        {
          icon: 'shield.svg',
          title: 'Garantía DeWALT',
          desc: '3 años de garantía directa del fabricante en todas las herramientas.',
        },
        {
          icon: 'globe.svg',
          title: 'Innovación Constante',
          desc: 'Acceso a los últimos modelos y tecnologías DeWALT del mercado.',
        },
      ],
    },

    // Información componente FAQ
    faq: {
      items: [
        {
          pregunta: '¿Mersol Sureste es distribuidor autorizado DeWALT?',
          respuesta:
            'Sí, somos distribuidores autorizados DeWALT con más de 18 años de presencia en el sureste mexicano, garantizando productos 100% originales.',
        },
        {
          pregunta: '¿Qué líneas de productos DeWALT manejan?',
          respuesta:
            'Manejamos herramientas eléctricas, manuales, inalámbricas, equipo de seguridad personal, almacenamiento, anclajes, sistemas FLEXVOLT y accesorios.',
        },
        {
          pregunta: '¿Los productos DeWALT tienen garantía de fábrica?',
          respuesta:
            'Sí, todas las herramientas DeWALT cuentan con garantía directa de 3 años del fabricante. Aplicamos el programa "DeWALT Guarantee".',
        },
        {
          pregunta: '¿Realizan envíos a toda la República Mexicana?',
          respuesta:
            'Sí, realizamos envíos a todo México. Contamos con 7 sucursales estratégicas para garantizar tiempos de entrega eficientes.',
        },
        {
          pregunta: '¿Puedo recoger mi pedido en alguna sucursal?',
          respuesta:
            'Sí, puedes recoger en cualquiera de nuestras sucursales en Villahermosa, Veracruz, Mérida, Apodaca, Campeche, Paraíso y Tula.',
        },
        {
          pregunta: '¿Manejan precios especiales para compras por volumen?',
          respuesta:
            'Sí, ofrecemos precios preferenciales para contratistas, empresas y compras de alto volumen. Contáctanos para cotización personalizada.',
        },
        {
          pregunta: '¿Ofrecen servicio técnico y reparación de herramientas DeWALT?',
          respuesta:
            'Sí, contamos con técnicos certificados por DeWALT para diagnóstico, mantenimiento y reparación de herramientas.',
        },
        {
          pregunta: '¿Tienen disponibilidad de refacciones originales DeWALT?',
          respuesta:
            'Sí, manejamos refacciones originales DeWALT para asegurar el máximo rendimiento y durabilidad de tus herramientas.',
        },
        {
          pregunta: '¿Ofrecen crédito o financiamiento para empresas?',
          respuesta:
            'Sí, contamos con opciones de crédito empresarial sujetas a evaluación. Contáctanos para conocer los requisitos.',
        },
        {
          pregunta: '¿Atienden proyectos industriales o licitaciones?',
          respuesta:
            'Sí, brindamos atención especializada para proyectos industriales, licitaciones públicas y compras de alto volumen con soporte técnico incluido.',
        },
      ],
    },

    // Información componente Testimonials
    testimonials: [
      {
        quote:
          'Excelente atención y productos originales DeWALT, encontré exactamente lo que necesitaba para mi obra',
        author: 'Roberto Hernández',
        location: 'Sucursal - Villahermosa',
        rating: 5,
      },
      {
        quote:
          'Gran variedad de herramientas DeWALT y el mejor precio de la región, muy recomendable',
        author: 'Ingeniería Constructora del Sureste',
        location: 'Sucursal - Mérida',
        rating: 5,
      },
      {
        quote:
          'El servicio técnico es de primera, resolvieron el problema de mi taladro el mismo día',
        author: 'Luis Domínguez',
        location: 'Sucursal - Veracruz',
        rating: 5,
      },
      {
        quote:
          'Compro mis herramientas DeWALT aquí desde hace años, siempre con garantía y respaldo',
        author: 'Contratista Independiente',
        location: 'Sucursal - Campeche',
        rating: 4,
      },
      {
        quote:
          'Envío rápido y producto bien empacado, el taladro percutor llegó en perfectas condiciones',
        author: 'Maestro Carpintero',
        location: 'Envío - Tabasco',
        rating: 5,
      },
      {
        quote: 'Asesoría profesional para elegir la sierra correcta para mi taller, muy satisfecho',
        author: 'Taller Metalmecánico Garza',
        location: 'Sucursal - Apodaca',
        rating: 5,
      },
      {
        quote:
          'Refacciones originales disponibles de inmediato, evitaron que mi equipo estuviera parado días',
        author: 'Empresa Manufacturera',
        location: 'Sucursal - Tula',
        rating: 4,
      },
    ],

    // Información componente CTA (Call To Action)
    cta: {
      title: '¿BUSCAS HERRAMIENTAS PROFESIONALES DEWALT PARA TU PROYECTO?',
      whatsappPhone: '529939805654',
      whatsappMessage:
        'Hola Mersol! Vengo de su página DeWALT. Me interesa obtener una asesoría industrial.',
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
      id: 'landing-dewalt',
    },

    // Información componente Footer
    footer: {
      brandLogoWhite: 'assets/brand/dewalt/logos-dewalt/DEWALT.svg',
      contactInfo: {
        phone: '+52 993 980 5654',
        email: 'ventas@mersolsureste.com.mx',
        schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
      },
      productsCol1: [
        { label: 'Herramientas Eléctricas', url: 'electricas' },
        { label: 'Herramientas Manuales', url: 'manuales' },
        { label: 'Jardinería', url: 'jardineria' },
        { label: 'Almacenamiento y Organización', url: 'organizacion' },
        { label: 'Anclajes y Fijaciones', url: 'anclajes' },
        { label: 'Equipo de Seguridad Personal', url: 'seguridad' },
        { label: 'Sistemas', url: 'sistemas' },
      ],
      productsCol2: [],
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

  // Iniciar servicios
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
