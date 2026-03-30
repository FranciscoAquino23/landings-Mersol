/* ==========================================================================
      FOOTER COMPONENT LOGIC
      ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Interfaz enlaces productos
interface FooterLink {
  label: string;
  url: string;
}

// Interfaz redes sociales
interface SocialNetwork {
  icon: string;
  url: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();

  // Información contactos
  public contactInfo = {
    phone: '+52 993 980 5654',
    email: 'ventas@mersolsureste.com.mx',
    schedules: ['Lun a Vie 8:00 AM - 5:30 PM', 'Sáb 8:00 AM - 1:30 PM'],
  };

  // Información productos
  public productsCol1: FooterLink[] = [
    { label: 'Abrasivos Sólidos', url: 'solidos' },
    { label: 'Productos de Lija', url: 'lija' },
    { label: 'Productos de Fibra', url: 'fibra' },
    { label: 'Pulido y Limpieza', url: 'pulido' },
    { label: 'Estética Automotriz', url: 'estetica' },
    { label: 'Construcción', url: 'construccion' },
  ];
  public productsCol2: FooterLink[] = [
    { label: 'Superabrasivos', url: 'superabrasivos' },
    { label: 'Rectificado Automotriz', url: 'rectificado' },
    { label: 'Cepillos de Alambre', url: 'cepillos' },
    { label: 'Herramientas', url: 'herramientas' },
    { label: 'Máquinas', url: 'maquinas' },
    { label: 'Accesorios', url: 'accesorios' },
  ];

  // Obtener los productos en la lista
  get allProducts(): FooterLink[] {
    return [...this.productsCol1, ...this.productsCol2];
  }

  // Información redes sociales
  public socialNetworks: SocialNetwork[] = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/GrupoAustromex' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/austromex' },
    {
      name: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/user/grupoaustromex/videos',
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/company/grupo-austromex/?originalSubdomain=mx',
    },
  ];
}
