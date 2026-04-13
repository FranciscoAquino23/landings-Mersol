/* ==========================================================================
   TESTIMONIALS LOGIC
   ========================================================================== */

import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  PLATFORM_ID,
  ChangeDetectorRef,
  HostListener,
  ChangeDetectionStrategy,
  inject,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LandingTestimonial } from '../../models/landing-config.interface';

// Información de las opiniones de los clientes (Componente compartido)
const DEFAULT_TESTIMONIALS: LandingTestimonial[] = [
  {
    quote: 'Excelente precios en gases y equipos de oxicorte, aquí encontré lo que buscaba',
    author: 'Moises Santamaria',
    location: 'Sucursal - Campeche',
    rating: 5,
  },
  {
    quote: 'Gran variedad tanto de marcas y productos, siempre encuentras lo que buscas',
    author: 'Claudia Caraveo',
    location: 'Sucursal - CEDIS Mérida',
    rating: 5,
  },
  {
    quote: 'Exelente para encontrar las refacciones y equipos',
    author: 'Jose Reyes Lopez Jimenez',
    location: 'Sucursal - Villahermosa',
    rating: 4,
  },
  {
    quote: 'Todo en materia de herramientas y seguridad industrial',
    author: 'FREDY SPARX (SPARX)',
    location: 'Sucursal - Villahermosa',
    rating: 5,
  },
  {
    quote: 'Una tienda grande especializada en herramientas industriales a un precio justo',
    author: 'Carlos Arias',
    location: 'Sucursal - Villahermosa',
    rating: 4,
  },
  {
    quote:
      'Es una tienda especializada en insumos y herramientas para la industria, una excelente opción para las medianas y grandes empresas',
    author: 'Carlos Cisneros',
    location: 'Sucursal - Villahermosa',
    rating: 5,
  },
  {
    quote: 'Muy bien surtidos en materiales, herramientas y refacciones',
    author: 'Jose Grethel Ramirez Alcazar',
    location: 'Sucursal - Villahermosa',
    rating: 5,
  },
];

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  // Representar animaciones y efecto de loop infinito
  currentIndex = 2;
  isTransitioning = true;
  private isAnimating = false;
  private autoPlayInterval: any;
  private readonly isBrowser: boolean;
  isMobile = false;

  private _testimonials: LandingTestimonial[] = [...DEFAULT_TESTIMONIALS];

  @Input() set testimonials(value: LandingTestimonial[] | undefined) {
    if (value != null) this._testimonials = [...value];
  }
  get testimonials(): LandingTestimonial[] {
    return this._testimonials;
  }

  displayTestimonials: LandingTestimonial[] = [];

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Iniciar arreglo de testimonios
  ngOnInit(): void {
    this.initInfiniteArray();
    this.checkScreenSize();
  }

  // Iniciar movimiento automático
  ngAfterViewInit(): void {
    if (this.isBrowser) this.startAutoPlay();
  }

  // Limpiar componente
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Verificar tamaño de la pantalla actual
  @HostListener('window:resize', ['$event'])
  onResize(_event: Event) {
    this.checkScreenSize();
  }

  // Determinar dispositivo actual (Desktop / Mobile)
  private checkScreenSize(): void {
    if (this.isBrowser) {
      const isMobileNow = window.innerWidth <= 768;

      // Actualizar estado
      if (this.isMobile !== isMobileNow) {
        this.isMobile = isMobileNow;
        this.cdr.markForCheck();
      }
    }
  }

  // Determinar tamaño del movimiento
  get stepSize(): number {
    return this.isMobile ? 100 : 50;
  }

  // Calcular desplazamiento
  get transformOffset(): string {
    return `translateX(-${this.currentIndex * this.stepSize}%)`;
  }

  // Iniciar arreglo infinito (Efecto carrusel)
  private initInfiniteArray(): void {
    const len = this._testimonials.length;
    if (len === 0) return;
    const firstTwo = this._testimonials.slice(0, 2);
    const lastTwo = this._testimonials.slice(len - 2);
    this.displayTestimonials = [...lastTwo, ...this._testimonials, ...firstTwo];
  }

  // Mover al siguiente
  next(): void {
    if (this.isAnimating) return;
    this.executeMove(this.currentIndex + 1);
  }

  // Mover al anterior
  prev(): void {
    if (this.isAnimating) return;
    this.executeMove(this.currentIndex - 1);
  }

  // Ejecutar movimientos
  private executeMove(target: number): void {
    this.stopAutoPlay();
    this.isAnimating = true;
    this.isTransitioning = true;
    this.currentIndex = target;
    this.cdr.markForCheck();
    setTimeout(() => {
      if (this.isAnimating) this.onTransitionEnd();
      this.cdr.markForCheck();
    }, 750);
  }

  // Lógica de salto infinito
  onTransitionEnd(): void {
    this.isAnimating = false;
    const total = this.displayTestimonials.length;
    if (this.currentIndex >= total - 2) {
      this.handleJump(2);
    } else if (this.currentIndex <= 1) {
      this.handleJump(total - 3);
    }
    this.startAutoPlay();
    this.cdr.markForCheck();
  }

  // Manejar animación de movimiento
  private handleJump(targetIndex: number): void {
    this.isTransitioning = false;
    this.currentIndex = targetIndex;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.isTransitioning = true;
      this.cdr.markForCheck();
    }, 50);
  }

  // Ir al siguiente testimonio
  goToSlide(index: number): void {
    if (this.isAnimating) return;
    this.executeMove(index + 2);
  }

  // Movimiento automático (5 segundos)
  private startAutoPlay(): void {
    if (this.isBrowser) {
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        this.next();
        this.cdr.markForCheck();
      }, 5000);
    }
  }

  // Detener movimiento automático (UI/UX)
  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  // Obtener número de estrellas (calificación)
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
