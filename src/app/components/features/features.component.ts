/* ==========================================================================
     FEATURES COMPONENT LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz de la estructura de los beneficios
interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  readonly ICON_PATH = 'assets/brand/icons/';

  // Beneficios (Features)
  features: FeatureItem[] = [
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
  ];

  constructor() {}
}
