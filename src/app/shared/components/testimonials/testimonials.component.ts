/* ==========================================================================
   TESTIMONIALS LOGIC
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  // Lista de testimonios
  testimonials: Testimonial[] = [
    {
      quote:
        'La asesoría técnica de Mersol fue clave para optimizar nuestros procesos de soldadura MIG. Sus equipos tienen un rendimiento excepcional en climas de alta humedad.',
      author: 'Ing. Roberto Cantón',
      position: 'Gerente de Producción',
      company: 'Estructuras Metálicas del Sureste',
      rating: 5,
    },
    {
      quote:
        'Excelente tiempo de respuesta en logística. Como taller de servicios urgentes, dependemos de la entrega rápida de consumibles y Mersol nunca nos ha fallado.',
      author: 'Ricardo Espadas',
      position: 'Dueño y Operador',
      company: 'Taller de Soldadura Industrial Espadas',
      rating: 5,
    },
    {
      quote:
        'Los equipos de soldadura que adquirimos cuentan con un respaldo y garantía real. El soporte post-venta en Mérida es lo que los diferencia de la competencia.',
      author: 'Lic. Andrea Moguel',
      position: 'Coordinadora de Compras',
      company: 'Constructoras e Ingenierías de Yucatán',
      rating: 5,
    },
  ];

  constructor() {}

  // Obtener y generar cantidad de estrellas del testimonio
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
