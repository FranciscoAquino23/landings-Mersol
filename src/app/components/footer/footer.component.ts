/* ==========================================================================
      FOOTER COMPONENT LOGIC
      ========================================================================== */

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LandingFooterConfig,
  LandingFooterContactInfo,
  LandingFooterLink,
  LandingFooterSocialNetwork,
} from '../../shared/models/landing-config.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
  public brandLogoWhite: string | undefined;

  // Recibir información de la ruta base de la landing actual
  @Input() basePath = '/';

  // Recibir nombre de la empresa aliada para el footer (Copyright)
  @Input() partnerName = '';

  // Información contactos
  public contactInfo: LandingFooterContactInfo = {
    phone: '+52 993 980 5654',
    email: 'ventas@mersolsureste.com.mx',
    schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
  };

  // Información productos
  public productsCol1: LandingFooterLink[] = [
    { label: 'Abrasivos Sólidos', url: 'solidos' },
    { label: 'Productos de Lija', url: 'lija' },
    { label: 'Productos de Fibra', url: 'fibra' },
    { label: 'Pulido y Limpieza', url: 'pulido' },
    { label: 'Estética Automotriz', url: 'estetica' },
    { label: 'Construcción', url: 'construccion' },
  ];
  public productsCol2: LandingFooterLink[] = [
    { label: 'Superabrasivos', url: 'superabrasivos' },
    { label: 'Industria Automotriz', url: 'rectificado' },
    { label: 'Cepillos de Alambre', url: 'cepillos' },
    { label: 'Herramientas', url: 'herramientas' },
    { label: 'Máquinas', url: 'maquinas' },
    { label: 'Accesorios', url: 'accesorios' },
  ];

  // Información redes sociales (MERSOL)
  public socialNetworks: LandingFooterSocialNetwork[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/MersolSuresteOficial' },
    { name: 'Instagram', url: 'https://www.instagram.com/mersolsureste/' },
    { name: 'Youtube', url: 'https://www.youtube.com/@mersolsureste4375' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/mersolsureste/posts/?feedView=all' },
  ];

  // Recibir información del footer de cada landing
  @Input() set footerConfig(config: LandingFooterConfig | undefined) {
    if (config == null) return;
    this.brandLogoWhite = config.brandLogoWhite;
    this.contactInfo = config.contactInfo;
    this.productsCol1 = config.productsCol1;
    this.productsCol2 = config.productsCol2;
    this.socialNetworks = config.socialNetworks;
  }

  // Obtener todos los productos y mostrarlos en el footer
  get allProducts(): LandingFooterLink[] {
    return [...this.productsCol1, ...this.productsCol2];
  }
}
