/* ==========================================================================
      FEATURES LOGIC
   ========================================================================== */

import { Component, Input } from '@angular/core';
import { LandingFeaturesConfig, LandingFeatureItem } from '../../models/landing-config.interface';

const ICON_PATH = 'assets/brand/shared/icons/';

// Información de la sección de features (Componente compartido)
const DEFAULT_FEATURES: LandingFeaturesConfig = {
  overline: 'VALOR AGREGADO',
  title: '¿POR QUÉ ELEGIR<br />MERSOL SURESTE?',
  description:
    'Soluciones integrales con el respaldo de las mejores marcas del mercado industrial.',
  // Información de las características que hacen destacar a MERSOL
  mainFeatures: [
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
  ],
  pillarFeatures: [
    {
      icon: 'truck.svg',
      title: 'Logística de Respuesta',
      desc: 'Garantizamos stock y entregas eficientes.',
    },
    {
      icon: 'shield.svg',
      title: 'Confianza Certificada',
      desc: 'Nuestros procesos y productos están certificados.',
    },
    { icon: 'globe.svg', title: 'Innovación Sustentable', desc: 'Reducimos el impacto ambiental.' },
  ],
};

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  readonly iconPath = ICON_PATH;

  overline = DEFAULT_FEATURES.overline;
  title = DEFAULT_FEATURES.title;
  description = DEFAULT_FEATURES.description;
  mainFeatures: LandingFeatureItem[] = DEFAULT_FEATURES.mainFeatures;
  pillarFeatures: LandingFeatureItem[] = DEFAULT_FEATURES.pillarFeatures;

  // Recibir información de la configuración para el componente features para cada landing
  @Input() set featuresConfig(config: LandingFeaturesConfig | undefined) {
    if (config == null) return;
    this.overline = config.overline;
    this.title = config.title;
    this.description = config.description;
    this.mainFeatures = config.mainFeatures;
    this.pillarFeatures = config.pillarFeatures;
  }
}
