/* ==========================================================================
   HERO COMPONENT LOGIC
   ========================================================================== */

import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar SeoService para tracking de eventos
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  @Input() title =
    'SOLUCIONES <br> <span class="text-outline">INDUSTRIALES</span> <br> <span class="text-red">ALTA CALIDAD</span>';
  @Input() subtitle = 'Expertos en soldadura y abrasivos para el sureste mexicano.';
  @Input() backgroundImage = 'assets/brand/banner.svg';

  @Input() primaryCtaText = 'VER CATÁLOGO';
  @Input() secondaryCtaText = 'CONTACTO';

  public isVisible = signal(false);

  // Información de la tarjeta de confianza
  public stats = {
    value: '+18',
    label: 'AÑOS DE EXPERIENCIA',
    description: 'Liderando el mercado industrial en el sureste.',
  };

  constructor(private seoService: SeoService) {}

  // Inicializar animación de entrada
  ngOnInit(): void {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.isVisible.set(true);
      }, 100);
    });
  }

  // Abrir catálogo y registrar evento
  public onPrimaryAction(): void {
    this.seoService.trackEvent('hero_primary_click', {
      action: 'view_catalog',
      label: this.primaryCtaText,
    });

    const catalogUrl =
      'https://austromex.com.mx/download/v/catalogos/CatalogoAustromex_2026_low.pdf';
    window.open(catalogUrl, '_blank');
  }

  // Abrir WhatsApp y registrar evento
  public onSecondaryAction(): void {
    this.seoService.trackEvent('hero_secondary_click', {
      action: 'contact_whatsapp',
      label: this.secondaryCtaText,
    });

    // Mensaje personalizado
    const whatsappUrl =
      'https://wa.me/529939805654?text=Hola%20Mersol!%20Vengo%20de%20su%20página%20web.%20Me%20interesa%20obtener%20información%20acerca%20de%20los%20productos%20de%20Austromex.';

    window.open(whatsappUrl, '_blank');
  }

  // Permitir banner dinámico
  get heroBgStyle(): string {
    return `url('${this.backgroundImage}')`;
  }
}
