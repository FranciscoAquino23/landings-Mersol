/* ==========================================================================
   CTA (CALL TO ACTION) LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar servicio
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  // Información de contacto
  contactData = {
    phone: '529939805654',
    message: 'Hola Mersol! Vengo de su página web. Me interesa obtener una asesoría industrial.',
  };

  constructor(private seoService: SeoService) {}

  // Generar enlace directo a contacto dentro de WhatsApp
  get whatsappUrl(): string {
    const encodedMsg = encodeURIComponent(this.contactData.message);
    return `https://wa.me/${this.contactData.phone}?text=${encodedMsg}`;
  }

  // Registrar evento de conversión (CTA)
  onContactClick(): void {
    this.seoService.trackEvent('conversion_whatsapp', {
      source: 'cta_component',
      label: 'Asesoría Industrial',
      value: 1,
    });
    window.open(this.whatsappUrl, '_blank');
  }
}
