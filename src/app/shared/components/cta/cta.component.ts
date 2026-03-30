/* ==========================================================================
   CTA (CALL TO ACTION) LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    message: 'Hola, me gustaría solicitar una asesoría industrial.',
  };

  constructor() {}

  // Generar enlace directo a contacto dentro de WhatsApp
  get whatsappUrl(): string {
    const encodedMsg = encodeURIComponent(this.contactData.message);
    return `https://wa.me/${this.contactData.phone}?text=${encodedMsg}`;
  }

  // Abrir chat de WhatsApp
  onContactClick(): void {
    window.open(this.whatsappUrl, '_blank');
  }
}
