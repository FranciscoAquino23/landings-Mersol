/* ==========================================================================
   LANDING MILWAUKEE STRUCTURE
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
  selector: 'app-landing-milwaukee',
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
  templateUrl: './landing-milwaukee.component.html',
  styleUrl: './landing-milwaukee.component.scss',
})
export class LandingMilwaukeeComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  /* =========================================================================
     CONFIGURACIÓN DE MARCA MILWAUKEE
     ========================================================================= */
  protected config: LandingConfig = {
    basePath: '/milwaukee',

    // Información Styles
    colors: {
      primary: '#e5070f',
      primaryHover: '#c61e24',
      secondary: '#0a0a0a',
    },

    // Información componente Hero
    hero: {
      title:
        'CONSTRUCCIÓN <br> <span class="text-outline">PROFESIONAL</span> <br> <span class="text-red">MILWAUKEE</span>',
      subtitle: 'Expertos en tecnología y rendimiento.',
      desktopImage: 'assets/brand/milwaukee/logos-milwaukee/banner-desktop.webp',
      mobileImage: 'assets/brand/milwaukee/logos-milwaukee/banner-mobile.webp',
      imageAlt: 'Herramientas inalámbricas Milwaukee en Mersol Sureste',
      primaryCtaText: 'VER CATÁLOGO',
      secondaryCtaText: 'CONTACTO',
      catalogUrl: 'assets/brand/milwaukee/promo-milwaukee/catalog-milwaukee.pdf',
      whatsappUrl:
        'https://wa.me/529939805654?text=Hola%20Mersol!%20Vengo%20de%20su%20p%C3%A1gina%20Milwaukee.%20Me%20interesa%20informaci%C3%B3n%20sobre%20sus%20herramientas.',
      whatsappMessage:
        'Hola Mersol! Vengo de su página Milwaukee. Me interesa información sobre sus productos y servicios.',
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
      brandLogoNavbar: 'assets/brand/milwaukee/logos-milwaukee/MILWAUKEE.svg',
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    },

    // Información servicio SEO
    seo: {
      title: 'Milwaukee | Nada más que trabajo pesado',
      description:
        'Distribuidor autorizado Milwaukee en el sureste mexicano. Expertos en herramientas inalámbricas de alto rendimiento y tecnología FUEL: sistemas M18, M12, PACKOUT y más.',
      ogImage: 'assets/brand/milwaukee/mersol-preview.webp',
      canonicalUrl: 'https://mersolsureste.com.mx/milwaukee',
      pageTitle: 'Mersol | Milwaukee',
      faviconPath: 'assets/brand/milwaukee/logos-milwaukee/favicon.ico',
    },

    // Información componente Banner
    banner: {
      tagline: 'DISTRIBUIDOR AUTORIZADO MILWAUKEE',
      promos: [
        {
          id: 1,
          titulo: 'Milwaukee M18 FUEL - Sistema Inalámbrico',
          imgDesktop: 'assets/brand/milwaukee/promo-milwaukee/promoH0.webp',
          imgMobile: 'assets/brand/milwaukee/promo-milwaukee/promoV0.webp',
          link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
          alt: 'Sistema inalámbrico M18 Milwaukee en Mersol Sureste',
        },
      ],
    },

    // Información componente Category (Productos)
    categories: [
      {
        title: 'HERRAMIENTAS ELÉCTRICAS',
        image: 'assets/brand/milwaukee/categories-milwaukee/01.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'HERRAMIENTAS MANUALES',
        image: 'assets/brand/milwaukee/categories-milwaukee/02.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'BATERÍAS Y CARGADORES',
        image: 'assets/brand/milwaukee/categories-milwaukee/03.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'ALMACENAMIENTO',
        image: 'assets/brand/milwaukee/categories-milwaukee/04.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'LUCES DE SITIO',
        image: 'assets/brand/milwaukee/categories-milwaukee/05.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'ACCESORIOS',
        image: 'assets/brand/milwaukee/categories-milwaukee/06.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
      {
        title: 'EQUIPO DE SEGURIDAD',
        image: 'assets/brand/milwaukee/categories-milwaukee/07.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=MILWAUKEE',
      },
    ],

    // Información componente Info (Nosotros)
    info: {
      subtitle: 'Liderazgo y Confianza Global',
      sectionTitle: 'Trayectoria de Excelencia',
      mainDescription:
        'Nuestra alianza estratégica con Milwaukee nos permite elevar la productividad de tu industria mediante soluciones técnicas certificadas y un soporte técnico especializado.',
      stats: [
        { endValue: 100, suffix: '+', label: 'Años de Liderazgo', highlight: true },
        { endValue: 18, suffix: '+', label: 'Años de Presencia Mersol', highlight: false },
        { endValue: 1000, suffix: '+', label: 'Productos en Catálogo', highlight: false },
        { endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
      ],
      certificaciones: [
        {
          nombre: 'Tecnología FUEL',
          subtitulo: 'Motor sin Escobillas',
          desc: 'Confirma que los motores FUEL ofrecen hasta 60% más de vida útil, 25% más de potencia y 50% más de velocidad que las herramientas con escobillas convencionales.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'REDLITHIUM',
          subtitulo: 'Baterías de Alto Rendimiento',
          desc: 'Certifica que las baterías REDLITHIUM entregan más trabajo por carga con gestión inteligente de celda a celda.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'ONE-KEY',
          subtitulo: 'Conectividad y Rastreo',
          desc: 'Verifica que la aplicación móvil ONE-KEY permita personalizar herramientas, rastrear inventario y gestionar flotas de equipos.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
      ],
      certSectionTitle: 'Calidad y Seguridad Avalada Internacionalmente',
      certSectionDesc:
        'Todas las herramientas Milwaukee incorporan las últimas innovaciones en rendimiento, durabilidad y conectividad del mercado.',
      quote: 'Expertos equipando expertos',
      quoteAuthor: '— Milwaukee & Mersol Sureste',
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
          title: 'Logística Express',
          desc: 'Garantizamos stock y entregas eficientes.',
        },
        {
          icon: 'shield.svg',
          title: 'Garantía MILWAUKEE',
          desc: 'Nuestros procesos y productos están certificados.',
        },
        {
          icon: 'globe.svg',
          title: 'Innovación Ecológica',
          desc: 'Operación responsable con el medio ambiente.',
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
        quote: 'Excelente para encontrar las refacciones y equipos',
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
        'Hola Mersol! Vengo de su página Milwaukee. Me interesa obtener una asesoría industrial.',
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
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3726.015160812369!2d-89.7011307!3d20.9519063!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x8f567334ff2fdbe5%3A0xbb9c01258aa28193!2sMersol%20Sureste%20CEDIS%20M%C3%A9rida!5e0!3m2!1ses-419!2smx!4v1776105357323!5m2!1ses-419!2smx',
      },
      {
        name: 'Apodaca, NL',
        address: 'Regioavenida 116, Regio Parque Industrial, Cd. Apodaca, NL, C.P. 66633',
        phone: '(81) 8123-1164 • (81) 8123-1215',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.882876200616!2d-100.21570430683457!3d25.745259005344916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x866295ed8d561cb3%3A0xb253f4f5e95bb375!2sMersol%20Sureste%20CEDIS%20APODACA!5e0!3m2!1ses-419!2sus!4v1776105617842!5m2!1ses-419!2sus',
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
      id: 'landing-milwaukee',
    },

    // Información componente Footer
    footer: {
      brandLogoWhite: 'assets/brand/milwaukee/logos-milwaukee/MILWAUKEE.svg',
      contactInfo: {
        phone: '+52 993 980 5654',
        email: 'ventas@mersolsureste.com.mx',
        schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
      },
      productsCol1: [
        { label: 'Herramientas Eléctricas', url: 'electrica' },
        { label: 'Herramientas Manuales', url: 'manual' },
        { label: 'Baterías y Cargadores', url: 'baterias' },
        { label: 'Almacenamiento', url: 'almacenamiento' },
      ],
      productsCol2: [
        { label: 'Luces de Sitio', url: 'luces' },
        { label: 'Accesorios', url: 'accesorios' },
        { label: 'Equipo de Seguridad', url: 'seguridad' },
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

  // Constructor de la landing-page Milwaukee
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
