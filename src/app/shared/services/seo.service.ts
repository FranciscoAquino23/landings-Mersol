/* ==========================================================================
   SEO SERVICE LOGIC
   ========================================================================== */

import { Injectable, inject, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  schema?: any;
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
    this.titleService.setTitle(config.title);
    // Descripción (Meta)
    this.metaService.updateTag({ name: 'description', content: config.description });
    // OpenGraph
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Validar url de las redes sociales
    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    }

    // Twitter Cards
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });

    // URL canónico
    if (config.url) {
      this.updateCanonicalUrl(config.url);
    }

    // Esquema de datos (JSON-LD)
    if (config.schema) {
      this.setJsonLd(config.schema);
    }
  }

  // Actualizar o generar link
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.dom.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // Proporcionar datos estructurados JSON-LD)
  private setJsonLd(schema: any): void {
    let script = this.dom.getElementById('schema-jsonld') as HTMLScriptElement;
    if (script) {
      script.text = JSON.stringify(schema);
    } else {
      script = this.dom.createElement('script');
      script.id = 'schema-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      this.dom.head.appendChild(script);
    }
  }

  // Capturar parámetros de UTM
  captureUtms(): any {
    if (typeof window === 'undefined') return null;

    const urlParams = new URLSearchParams(window.location.search);

    // Guardar parámetros actuales
    if (urlParams.has('utm_source')) {
      const utms = {
        source: urlParams.get('utm_source'),
        medium: urlParams.get('utm_medium') || '',
        campaign: urlParams.get('utm_campaign') || '',
        term: urlParams.get('utm_term') || '',
        content: urlParams.get('utm_content') || '',
        timestamp: new Date().toISOString(),
      };

      sessionStorage.setItem('user_utms', JSON.stringify(utms));
      return utms;
    }

    return this.getStoredUtms();
  }

  // Recuperar UTM almacenados
  getStoredUtms(): any {
    if (typeof window === 'undefined') return null;

    const stored = sessionStorage.getItem('user_utms');
    return stored ? JSON.parse(stored) : null;
  }

  // Mapa de eventos
  trackEvent(eventName: string, data?: any): void {
    console.log(`[Tracking Event]: ${eventName}`, data);
  }
}
