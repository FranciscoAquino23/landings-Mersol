/* ==========================================================================
   LANDING CONFIG INTERFACE
   ========================================================================== */

// Estructura de los estilos
export interface LandingColors {
  primary: string;
  primaryHover: string;
  secondary: string;
}

// Estructura del componente Hero
export interface LandingHeroStats {
  value: string;
  label: string;
  description: string;
}

// Información del componente Hero
export interface LandingHero {
  title: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  catalogUrl: string;
  whatsappUrl: string;
  stats: LandingHeroStats;
}

// Información de la nueva landing
export interface LandingBusiness {
  name: string;
  alternateName?: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  brandLogoNavbar?: string;
  sameAs?: string[];
}

// Información del servicio SEO
export interface LandingSeo {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
  pageTitle?: string;
  faviconPath?: string;
}

// Estructura del componente Banner
export interface LandingPromo {
  id: number;
  titulo: string;
  imgDesktop: string;
  imgMobile: string;
  link: string;
  alt: string;
}

// Información del componente Banner
export interface LandingBannerConfig {
  tagline: string;
  promos: LandingPromo[];
}

// Estructura del componente Category (Productos)
export interface LandingCategory {
  title: string;
  image: string;
  link: string;
  color?: string;
}

// Estructura del componente Info (Nosotros)
export interface LandingInfoStat {
  endValue: number;
  suffix: string;
  label: string;
  highlight: boolean;
}

// Estructura del componente Info (KPI's)
export interface LandingInfoCert {
  nombre: string;
  subtitulo: string;
  desc: string;
  icon: string;
}

// Estructura del componente Info (Certificaciones)
export interface LandingInfoConfig {
  subtitle: string;
  sectionTitle: string;
  mainDescription: string;
  stats: LandingInfoStat[];
  certificaciones: LandingInfoCert[];
  certSectionTitle?: string;
  certSectionDesc?: string;
  quote?: string;
  quoteAuthor?: string;
}

// Estructura del componente Features
export interface LandingFeatureItem {
  icon: string;
  title: string;
  desc: string;
}

// Estructura del componente Features (Tarjetas)
export interface LandingFeaturesConfig {
  overline: string;
  title: string;
  description: string;
  mainFeatures: LandingFeatureItem[];
  pillarFeatures: LandingFeatureItem[];
}

// Estructura del componente FAQ
export interface LandingFaqItem {
  pregunta: string;
  respuesta: string;
}

// Estructura del componente FAQ (Preguntas/Respuestas)
export interface LandingFaqConfig {
  overline?: string;
  title?: string;
  description?: string;
  items: LandingFaqItem[];
}

// Estructura del componente Testimonials (Opiniones)
export interface LandingTestimonial {
  quote: string;
  author: string;
  location: string;
  rating: number; // 1–5
}

// Estructura del componente CTA (Call To Action)
export interface LandingCtaConfig {
  title: string;
  whatsappPhone: string;
  whatsappMessage: string;
}

// Estructura del componente Locations
export interface LandingBranch {
  name: string;
  address: string;
  phone: string;
  mapEmbedUrl: string;
}

// Estructura del componente Footer
export interface LandingFooterContactInfo {
  phone: string;
  email: string;
  schedules: string[];
}

// Estructura del componente Footer (Productos)
export interface LandingFooterLink {
  label: string;
  url: string;
}

// Estructura del componente Footer (Social Media)
export interface LandingFooterSocialNetwork {
  name: string;
  url: string;
}

// Estructura del componente Footer (Logos)
export interface LandingFooterConfig {
  brandLogoWhite?: string;
  contactInfo: LandingFooterContactInfo;
  productsCol1: LandingFooterLink[];
  productsCol2: LandingFooterLink[];
  socialNetworks: LandingFooterSocialNetwork[];
}

// Estructura general para cada landing-page
export interface LandingConfig {
  basePath: string;
  colors: LandingColors;
  hero: LandingHero;
  business: LandingBusiness;
  seo: LandingSeo;
  banner?: LandingBannerConfig;
  categories?: LandingCategory[];
  info?: LandingInfoConfig;
  features?: LandingFeaturesConfig;
  faq?: LandingFaqConfig;
  testimonials?: LandingTestimonial[];
  cta?: LandingCtaConfig;
  locations?: LandingBranch[];
  footer?: LandingFooterConfig;
  contactForm?: { email: string; id: string };
}
