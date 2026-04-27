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
  inject,
  Input,
} from '@angular/core';
import { LandingInfoConfig } from '../../shared/models/landing-config.interface';

// Estructura de los KPI'S
interface Stat {
  currentValue: number;
  endValue: number;
  suffix: string;
  label: string;
  highlight: boolean;
}

// Estructura de las certificaciones
interface Certificacion {
  nombre: string;
  subtitulo: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  // Registrar ubicación del usuario y mostrar animaciones
  private cdr = inject(ChangeDetectorRef);
  private observer: IntersectionObserver | null = null;
  private animationInterval: any;
  private hasAnimated = false;

  // Configurar valores por defecto (Austromex)
  // (header / descripción / KPI'S)
  public readonly subtitle = signal('Liderazgo y Respaldo Regional');
  public readonly sectionTitle = signal('Trayectoria de Excelencia');
  public readonly mainDescription = signal(
    'Nuestra alianza estratégica con Grupo Austromex nos permite elevar la productividad de tu industria mediante soluciones técnicas certificadas y un soporte técnico especializado.',
  );
  public readonly certSectionTitle = signal('Seguridad y Calidad Avalada Internacionalmente');
  public readonly certSectionDesc = signal(
    'Nuestras operaciones y productos cumplen con las normativas globales más exigentes del sector industrial.',
  );
  public readonly quote = signal('"Tu éxito es el nuestro"');
  public readonly quoteAuthor = signal('— Grupo Austromex & Mersol Sureste');

  public readonly stats = signal<Stat[]>([
    { currentValue: 0, endValue: 60, suffix: '+', label: 'Años de Liderazgo', highlight: true },
    {
      currentValue: 0,
      endValue: 18,
      suffix: '+',
      label: 'Años de Presencia Mersol',
      highlight: false,
    },
    {
      currentValue: 0,
      endValue: 2800,
      suffix: '+',
      label: 'Productos en Catálogo',
      highlight: false,
    },
    { currentValue: 0, endValue: 7, suffix: '', label: 'Sucursales Regionales', highlight: true },
  ]);

  // Información de las certificaciones
  public readonly certificaciones = signal<Certificacion[]>([
    {
      nombre: 'oSa Alemania',
      subtitulo: 'Seguridad Abrasiva',
      desc: 'Garantiza que cada herramienta es fabricada bajo estándares de seguridad, con trazabilidad total y pruebas de resistencia extremas.',
      icon: 'assets/brand/shared/icons/award.svg',
    },
    {
      nombre: 'ISO 9001',
      subtitulo: 'Gestión de Calidad',
      desc: 'Certifica un sistema enfocado en la excelencia operativa y la mejora continua para entregar productos consistentes de alta calidad.',
      icon: 'assets/brand/shared/icons/award.svg',
    },
    {
      nombre: 'ISO 45001',
      subtitulo: 'Salud y Seguridad',
      desc: 'Valida un entorno laboral seguro que previene riesgos laborales, protegiendo la integridad de todos nuestros colaboradores.',
      icon: 'assets/brand/shared/icons/award.svg',
    },
  ]);

  // Recibir información sobre la sección de "Nosotros" para cada landing
  @Input() set infoConfig(config: LandingInfoConfig | undefined) {
    if (config == null) return;

    this.subtitle.set(config.subtitle);
    this.sectionTitle.set(config.sectionTitle);
    this.mainDescription.set(config.mainDescription);
    this.stats.set(config.stats.map((s) => ({ ...s, currentValue: 0 })));
    this.certificaciones.set(config.certificaciones);

    if (config.certSectionTitle) this.certSectionTitle.set(config.certSectionTitle);
    if (config.certSectionDesc) this.certSectionDesc.set(config.certSectionDesc);
    if (config.quote) this.quote.set(config.quote);
    if (config.quoteAuthor) this.quoteAuthor.set(config.quoteAuthor);
  }

  // Iniciar animaciones (UI/UX)
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
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateStats();
          } else if (entry.boundingClientRect.top > 0) {
            this.resetStats();
          }
        });
        this.cdr.markForCheck();
      },
      {
        root: null,
        rootMargin: isMobile ? '0px 0px -50px 0px' : '0px',
        threshold: isMobile ? 0.1 : [0.01, 0.1],
      },
    );

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

    const totalFrames = (2000 / 1000) * 60;
    let frame = 0;

    this.animationInterval = setInterval(() => {
      frame++;
      const progress = this.easeOutQuad(frame / totalFrames);
      this.stats.set(
        this.stats().map((s) => ({ ...s, currentValue: Math.floor(s.endValue * progress) })),
      );
      this.cdr.markForCheck();

      if (frame >= totalFrames) {
        this.finishAnimation();
      }
    }, 1000 / 60);
  }

  // Finalizar animación con valores exactos
  private finishAnimation() {
    this.clearAnimation();
    this.stats.set(this.stats().map((s) => ({ ...s, currentValue: s.endValue })));
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
