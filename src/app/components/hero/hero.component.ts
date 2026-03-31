/* ==========================================================================
   HERO COMPONENT LOGIC
   ========================================================================== */

import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  @Input() title: string =
    'SOLUCIONES <br> <span class="text-outline">INDUSTRIALES</span> <br> <span class="text-red">ALTA CALIDAD</span>';
  @Input() subtitle: string = 'Expertos en soldadura y abrasivos para el sureste mexicano.';
  @Input() backgroundImage: string = 'assets/brand/banner.svg';

  @Input() primaryCtaText: string = 'VER CATÁLOGO';
  @Input() secondaryCtaText: string = 'CONTACTO';
  public isVisible = signal(false);

  // Información de la tarjeta de confianza
  public stats = {
    value: '+18',
    label: 'AÑOS DE EXPERIENCIA',
    description: 'Liderando el mercado industrial en el sureste.',
  };

  constructor() {}

  // Inicializar animación de entrada
  ngOnInit(): void {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.isVisible.set(true);
      }, 100);
    });
  }

  // Nvegar a secciones externas
  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`La sección con ID "${sectionId}" no fue encontrada.`);
    }
  }

  // Botón catálogo
  public onPrimaryAction(): void {
    const catalogUrl =
      'https://austromex.com.mx/download/v/catalogos/CatalogoAustromex_2026_low.pdf';
    window.open(catalogUrl, '_blank');
  }

  // Permitir banner dinámico
  get heroBgStyle(): string {
    return `url('${this.backgroundImage}')`;
  }
}
