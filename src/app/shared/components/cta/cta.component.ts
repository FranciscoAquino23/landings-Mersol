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
  // Información de contactos
  contactData = {
    phone: '5555571966',
    message: 'Hola, me gustaría solicitar una asesoría sobre sus equipos industriales.',
  };

  constructor() {}

  // Generar enlace directo a WhatsApp empresarial
  get whatsappUrl(): string {
    const encodedMsg = encodeURIComponent(this.contactData.message);
    return `https://wa.me/${this.contactData.phone}?text=${encodedMsg}`;
  }

  // Activar acción de contacto
  onContactClick(): void {
    window.open(this.whatsappUrl, '_blank');
  }
}
