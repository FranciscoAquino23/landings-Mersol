/* ==========================================================================
   SEO SERVICE LOGIC
   ========================================================================== */

import { Injectable, inject, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { LandingBusiness } from '../models/landing-config.interface';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  schema?: Record<string, unknown>;
  pageTitle?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  constructor(@Inject(DOCUMENT) private dom: Document) {}

  // COnfigurar SEO - OpenGraph y  Twitter Cards
  setMetaTags(config: SeoConfig): void {
    // Título de la página
    this.titleService.setTitle(config.pageTitle ?? config.title);
    // Descripción (Meta)
    this.metaService.updateTag({ name: 'description', content: config.description });
    // OpenGraph
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Validar url de las redes sociales
    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
      this.updateCanonicalUrl(config.url);
    }
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }

    // Twitter Cards
    this.metaService.updateTag({ property: 'og:locale', content: 'es_MX' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) {
      this.metaService.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.schema) {
      this.setJsonLd(config.schema);
    }
  }

  // Generar objeto (JSON_LD) para cada landing
  buildOrganizationSchema(business: LandingBusiness): Record<string, unknown> {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: business.name,
      url: business.website,
      logo: business.logo,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: business.phone,
        contactType: 'sales',
        areaServed: 'MX',
        availableLanguage: 'Spanish',
      },
    };

    if (business.alternateName) {
      schema['alternateName'] = business.alternateName;
    }
    if (business.sameAs?.length) {
      schema['sameAs'] = business.sameAs;
    }

    return schema;
  }

  // Capturar parámetros UTM de la URL
  captureUtms(): Record<string, string> | null {
    if (typeof window === 'undefined') return null;

    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('utm_source')) return this.getStoredUtms();

    const utms: Record<string, string> = {
      source: urlParams.get('utm_source') ?? '',
      medium: urlParams.get('utm_medium') ?? '',
      campaign: urlParams.get('utm_campaign') ?? '',
      term: urlParams.get('utm_term') ?? '',
      content: urlParams.get('utm_content') ?? '',
      timestamp: new Date().toISOString(),
    };

    sessionStorage.setItem('user_utms', JSON.stringify(utms));
    return utms;
  }

  // Recuperar UTMs almacenados
  getStoredUtms(): Record<string, string> | null {
    if (typeof window === 'undefined') return null;
    const stored = sessionStorage.getItem('user_utms');
    return stored ? JSON.parse(stored) : null;
  }

  // Registrar eventos
  trackEvent(eventName: string, data?: Record<string, unknown>): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, data);
    }
  }

  // Actualizar favicon
  setFavicon(path: string): void {
    this.setLinkTag({ rel: 'icon', href: path, type: this.resolveFaviconType(path) });
    this.setLinkTag({ rel: 'apple-touch-icon', href: path, sizes: '180x180' });
  }

  // Actualizar link de cada landing
  private setLinkTag(attrs: { rel: string; href: string; type?: string; sizes?: string }): void {
    let link = this.dom.querySelector<HTMLLinkElement>(`link[rel='${attrs.rel}']`);
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', attrs.rel);
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', attrs.href);
    if (attrs.type) link.setAttribute('type', attrs.type);
    if (attrs.sizes) link.setAttribute('sizes', attrs.sizes);
  }

  // Modificar el formato del archivo del favicon
  private resolveFaviconType(path: string): string {
    if (path.endsWith('.svg')) return 'image/svg+xml';
    if (path.endsWith('.png')) return 'image/png';
    return 'image/x-icon';
  }

  // Actualizar link canónico de cada landing
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.dom.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // Gestionar estructura de datos (JSON-LD)
  private setJsonLd(schema: Record<string, unknown>): void {
    let script = this.dom.getElementById('schema-jsonld') as HTMLScriptElement;
    if (!script) {
      script = this.dom.createElement('script');
      script.id = 'schema-jsonld';
      script.type = 'application/ld+json';
      this.dom.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }
}
