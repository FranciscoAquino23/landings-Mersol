/* ==========================================================================
   HERO COMPONENT LOGIC
   ========================================================================== */

import { Component, Input, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

// Importar SeoService para tracking de eventos
import { SeoService } from '../../shared/services/seo.service';
import { LandingHeroStats } from '../../shared/models/landing-config.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  // Recibir información de cada landing (header / banner / botones)
  @Input() title =
    'SOLUCIONES <br> <span class="text-outline">INDUSTRIALES</span> <br> <span class="text-red">ALTA CALIDAD</span>';
  @Input() subtitle = 'Expertos en soldadura y abrasivos.';

  @Input() desktopImage = '';
  @Input() mobileImage = '';
  @Input() imageAlt = 'Equipos industriales - Mersol Sureste';

  @Input() primaryCtaText = 'VER CATÁLOGO';
  @Input() secondaryCtaText = 'CONTACTO';

  // Recibir información del catálogo (URL o PDF / vacío = ocultar botón)
  @Input() catalogUrl?: string;

  // Recibir información del mensaje (Whatsapp)
  @Input() whatsappUrl = '';
  @Input() whatsappMessage?: string;

  get effectiveWhatsappUrl(): string {
    if (this.whatsappMessage) {
      const base = this.whatsappUrl.split('?')[0];
      return `${base}?text=${encodeURIComponent(this.whatsappMessage)}`;
    }
    return this.whatsappUrl;
  }

  // Tarjeta de confianza
  @Input() stats: LandingHeroStats = {
    value: '+18',
    label: 'AÑOS DE EXPERIENCIA',
    description: 'Liderando el mercado industrial en el sureste.',
  };

  public isVisible = signal(false);

  constructor(private seoService: SeoService) {}

  // Inicializar animación de entrada
  ngOnInit(): void {
    requestAnimationFrame(() => {
      setTimeout(() => this.isVisible.set(true), 100);
    });
  }

  // Abrir catálogo y registrar evento
  public onPrimaryAction(): void {
    this.seoService.trackEvent('hero_primary_click', {
      action: 'view_catalog',
      label: this.primaryCtaText,
    });
    window.open(this.catalogUrl, '_blank');
  }

  // Abrir WhatsApp y registrar evento
  public onSecondaryAction(): void {
    this.seoService.trackEvent('hero_secondary_click', {
      action: 'contact_whatsapp',
      label: this.secondaryCtaText,
    });
    window.open(this.effectiveWhatsappUrl, '_blank');
  }
}
