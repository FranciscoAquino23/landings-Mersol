/* ==========================================================================
   CTA (CALL TO ACTION) LOGIC
   ========================================================================== */

import { Component, Input } from '@angular/core';
import { LandingCtaConfig } from '../../models/landing-config.interface';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})

// Información default del componente (CTA)
export class CtaComponent {
  title = '¿BUSCAS CALIDAD Y SEGURIDAD PARA LLEVAR TU PRODUCTIVIDAD AL SIGUIENTE NIVEL?';
  bannerBgColor = 'var(--primary)';
  buttonTextColor = 'var(--primary)';

  private phone = '529939805654';
  private message =
    'Hola Mersol! Vengo de su página web. Me interesa obtener información sobre sus productos y servicios.';

  // Recibir información del (CTA) para cada landing
  @Input() set ctaConfig(config: LandingCtaConfig | undefined) {
    if (config == null) return;
    this.title = config.title;
    this.phone = config.whatsappPhone;
    this.message = config.whatsappMessage;
  }

  constructor(private seoService: SeoService) {}

  // Generar enlace directo a contacto dentro de WhatsApp
  get whatsappUrl(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }

  // Registrar evento de conversión (CTA)
  onContactClick(event: Event): void {
    event.preventDefault();
    this.seoService.trackEvent('conversion_whatsapp', {
      source: 'cta_component',
      label: this.title,
      value: 1,
    });
    window.open(this.whatsappUrl, '_blank');
  }
}
