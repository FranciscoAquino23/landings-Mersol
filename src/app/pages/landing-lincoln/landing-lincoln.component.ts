/* ==========================================================================
   LANDING LINCOLN ELECTRIC STRUCTURE
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
  selector: 'app-landing-lincoln',
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
  templateUrl: './landing-lincoln.component.html',
  styleUrl: './landing-lincoln.component.scss',
})
export class LandingLincolnComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragmentSub: Subscription | undefined;

  /* =========================================================================
     CONFIGURACIÓN DE MARCA LINCOLN ELECTRIC
     ========================================================================= */
  protected config: LandingConfig = {
    basePath: '/lincoln',

    // Información Styles
    colors: {
      primary: '#e34226',
      primaryHover: '#bb3119',
      secondary: '#1c1c1c',
    },

    // Información componente Hero
    hero: {
      title:
        'SOLDADURA <br> <span class="text-outline">SEGURIDAD</span> <br> <span class="text-red">LINCOLN</span>',
      subtitle: 'Expertos en consumibles y automatización.',
      desktopImage: 'assets/brand/lincoln/logos-lincoln/banner-desktop.webp',
      mobileImage: 'assets/brand/lincoln/logos-lincoln/banner-mobile.webp',
      imageAlt: 'Equipos de soldadura Lincoln Electric en Mersol Sureste',
      primaryCtaText: 'VER CATÁLOGO',
      secondaryCtaText: 'CONTACTO',
      catalogUrl:
        'https://ch-delivery.lincolnelectric.com/api/public/content/c016a161d1324e2fa7c165be8b61d33b?v=b675d7f8',
      whatsappUrl:
        'https://wa.me/529939805654?text=Hola%20Mersol!%20Vengo%20de%20su%20p%C3%A1gina%20Lincoln%20Electric.%20Me%20interesa%20informaci%C3%B3n%20sobre%20sus%20equipos%20de%20soldadura.',
      whatsappMessage:
        'Hola Mersol! Vengo de su página Lincoln Electric. Me interesa información sobre sus productos y servicios.',
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
      brandLogoNavbar: 'assets/brand/lincoln/logos-lincoln/LINCOLN.svg',
      sameAs: ['https://www.facebook.com/mersolsureste', 'https://www.instagram.com/mersolsureste'],
    },

    // Información servicio SEO
    seo: {
      title: 'Lincoln Electric | La solución en soldadura',
      description:
        'Distribuidor autorizado Lincoln Electric en el sureste mexicano. Expertos en equipos de soldadura, consumibles y soluciones de automatización: Power Wave, Flextec, Magnum y caretas Viking.',
      ogImage: 'assets/brand/lincoln/mersol-preview.webp',
      canonicalUrl: 'https://mersolsureste.com.mx/lincoln',
      pageTitle: 'Mersol | Lincoln Electric',
      faviconPath: 'assets/brand/lincoln/logos-lincoln/favicon.ico',
    },

    // Información componente Banner
    banner: {
      tagline: 'DISTRIBUIDOR AUTORIZADO LINCOLN ELECTRIC',
      promos: [
        {
          id: 1,
          titulo: 'Lincoln Electric - Power Wave',
          imgDesktop: 'assets/brand/lincoln/promo-lincoln/promoH0.webp',
          imgMobile: 'assets/brand/lincoln/promo-lincoln/promoV0.webp',
          link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
          alt: 'Máquinas de soldar Power Wave Lincoln Electric en Mersol Sureste',
        },
        {
          id: 2,
          titulo: 'Lincoln Electric - Consumibles y Caretas Viking',
          imgDesktop: 'assets/brand/lincoln/promo-lincoln/promoH1.webp',
          imgMobile: 'assets/brand/lincoln/promo-lincoln/promoV1.webp',
          link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
          alt: 'Consumibles y caretas Viking Lincoln Electric en Mersol Sureste',
        },
      ],
    },

    // Información componente Category (Productos)
    categories: [
      {
        title: 'MÁQUINAS DE SOLDAR',
        image: 'assets/brand/lincoln/categories-lincoln/01.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'MÁQUINAS DE CORTE.',
        image: 'assets/brand/lincoln/categories-lincoln/02.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'PISTOLAS Y ANTORCHAS',
        image: 'assets/brand/lincoln/categories-lincoln/03.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'AUTOMATIZACIÓN',
        image: 'assets/brand/lincoln/categories-lincoln/04.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'HERRAMIENTAS',
        image: 'assets/brand/lincoln/categories-lincoln/05.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'ACCESORIOS DE SEGURIDAD',
        image: 'assets/brand/lincoln/categories-lincoln/06.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
      {
        title: 'CONSUMIBLES',
        image: 'assets/brand/lincoln/categories-lincoln/07.webp',
        link: 'https://mersolsureste.com.mx/tienda?search=LINCOLN',
      },
    ],

    // Información componente Info (Nosotros)
    info: {
      subtitle: 'Liderazgo y Confianza Global',
      sectionTitle: 'Trayectoria de Excelencia',
      mainDescription:
        'Nuestra alianza estratégica con Lincoln Electric nos permite elevar la productividad de tu industria mediante soluciones técnicas certificadas y un soporte técnico especializado.',
      stats: [
        { endValue: 125, suffix: '+', label: 'Años de Liderazgo', highlight: true },
        { endValue: 18, suffix: '+', label: 'Años de Presencia Mersol', highlight: false },
        { endValue: 4200, suffix: '+', label: 'Productos en Catálogo', highlight: false },
        { endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
      ],
      certificaciones: [
        {
          nombre: 'AWS D1.1',
          subtitulo: 'Soldadura Estructural de Acero',
          desc: 'Asegura que los equipos y consumibles cumplen con el estándar más reconocido en soldadura estructural para construcción civil e industrial.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'ISO 9001',
          subtitulo: 'Sistema de Gestión de Calidad',
          desc: 'Garantiza una operación certificada en sus plantas globales, garantizando la consistencia y trazabilidad de cada producto fabricado.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
        {
          nombre: 'CE / CSA / UL',
          subtitulo: 'Seguridad Internacional',
          desc: 'Valida que todos los equipos cumplen con las directivas de seguridad eléctrica de Europa, Canadá y Estados Unidos.',
          icon: 'assets/brand/shared/icons/award.svg',
        },
      ],
      certSectionTitle: 'Calidad y Seguridad Avalada Internacionalmente',
      certSectionDesc:
        'Todos los equipos y consumibles están respaldados por más de 125 años de innovación en soldadura industrial.',
      quote: '"Construido para los que construyen el mundo"',
      quoteAuthor: '— Lincoln Electric & Mersol Sureste',
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
          title: 'Garantía LINCOLN',
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
        'Hola Mersol! Vengo de su página Lincoln Electric. Me interesa obtener una asesoría industrial.',
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
      id: 'landing-lincoln',
    },

    // Información componente Footer
    footer: {
      brandLogoWhite: 'assets/brand/lincoln/logos-lincoln/LINCOLN.svg',
      contactInfo: {
        phone: '+52 993 980 5654',
        email: 'ventas@mersolsureste.com.mx',
        schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
      },
      productsCol1: [
        { label: 'Máquinas de Soldar', url: 'soldar' },
        { label: 'Máquinas de Corte', url: 'corte' },
        { label: 'Pistolas y Antorchas', url: 'antorchas' },
        { label: 'Consumibles', url: 'consumibles' },
      ],
      productsCol2: [
        { label: 'Automatización', url: 'automatizacion' },
        { label: 'Herramientas', url: 'herramientas' },
        { label: 'Accesorios de Seguridad', url: 'seguridad' },
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

  // Constructor de la landing-page Lincoln Electric
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
