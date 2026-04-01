/* ==========================================================================
     INFO COMPONENT LOGIC
   ========================================================================== */

import {
  Component,
  signal,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para la estructura de cada KPI
interface Stat {
  currentValue: number;
  endValue: number;
  suffix: string;
  label: string;
  highlight: boolean;
}

// Interfaz para la estructura de cada certificación
interface Certificacion {
  nombre: string;
  subtitulo: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  private observer: IntersectionObserver | null = null;
  private animationInterval: any;
  private hasAnimated = false;
  public readonly subtitle = signal('Liderazgo y Respaldo Regional');
  public readonly sectionTitle = signal('Trayectoria de Excelencia');
  public readonly mainDescription = signal(`
    Nuestra alianza estratégica con Grupo Austromex nos permite elevar la productividad de tu industria 
    mediante soluciones técnicas certificadas y un soporte técnico especializado.
  `);

  // KPI'S
  public readonly stats = signal<Stat[]>([
    { currentValue: 0, endValue: 60, suffix: '+', label: 'Años de Liderazgo', highlight: true },
    { currentValue: 0, endValue: 17, suffix: '+', label: 'Presencia Mersol', highlight: false },
    {
      currentValue: 0,
      endValue: 2800,
      suffix: '+',
      label: 'Productos en Catálogo',
      highlight: false,
    },
    { currentValue: 0, endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
  ]);

  // Certificaciones
  public readonly certificaciones = signal<Certificacion[]>([
    {
      nombre: 'oSa Alemania',
      subtitulo: 'Seguridad Abrasiva',
      desc: 'Garantiza que cada herramienta es fabricada bajo estándares de seguridad, con trazabilidad total y pruebas de resistencia extremas.',
      icon: 'assets/brand/icons/award.svg',
    },
    {
      nombre: 'ISO 9001',
      subtitulo: 'Gestión de Calidad',
      desc: 'Certifica un sistema enfocado en la excelencia operativa y la mejora continua para entregar productos consistentes de alta calidad.',
      icon: 'assets/brand/icons/award.svg',
    },
    {
      nombre: 'ISO 45001',
      subtitulo: 'Salud y Seguridad',
      desc: 'Valida un entorno laboral seguro que previene riesgos laborales, protegiendo la integridad de todos nuestros colaboradores.',
      icon: 'assets/brand/icons/award.svg',
    },
  ]);

  constructor(private cdr: ChangeDetectorRef) {}

  // Iniciar observador para reconocer cuando el usuario accede a la sección
  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  // Limpiar recursos
  ngOnDestroy(): void {
    this.destroyObserver();
    this.clearAnimation();
  }

  // Configurar lógica de observación (Desktop / Mobile)
  private setupIntersectionObserver() {
    const isMobile = window.innerWidth <= 768;

    const options = {
      root: null,
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px',
      threshold: isMobile ? 0.1 : [0.01, 0.1],
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateStats();
        } else {
          // Reiniciar KPI'S si el usuario hace scroll
          if (entry.boundingClientRect.top > 0) {
            this.resetStats();
          }
        }
      });
    }, options);

    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  // Reiniciar animación de KPI'S
  private resetStats() {
    if (!this.hasAnimated) return;
    this.clearAnimation();
    this.hasAnimated = false;
    this.stats.set(this.stats().map((s) => ({ ...s, currentValue: 0 })));
    this.cdr.markForCheck();
  }

  // Animar KPI'S
  private animateStats() {
    if (this.hasAnimated) return;
    this.hasAnimated = true;
    this.clearAnimation();

    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    this.animationInterval = setInterval(() => {
      frame++;
      const progress = this.easeOutQuad(frame / totalFrames);

      const nextStats = this.stats().map((stat) => ({
        ...stat,
        currentValue: Math.floor(stat.endValue * progress),
      }));

      this.stats.set(nextStats);
      this.cdr.markForCheck();

      if (frame >= totalFrames) {
        this.finishAnimation();
      }
    }, 1000 / fps);
  }

  // Finalizar animación con valores exactos
  private finishAnimation() {
    this.clearAnimation();
    this.stats.set(
      this.stats().map((stat) => ({
        ...stat,
        currentValue: stat.endValue,
      })),
    );
    this.cdr.markForCheck();
  }

  // Limpiar intervalo de animación
  private clearAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
  }

  // Desconectar observador (Memory clean)
  private destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  // Suavizar animación
  private easeOutQuad(t: number): number {
    return t * (2 - t);
  }
}
