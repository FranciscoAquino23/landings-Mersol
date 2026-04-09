/* ==========================================================================
      BANNER COMPONENT LOGIC
   ========================================================================== */

import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  HostListener,
  computed,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  public currentIndex = signal(0);
  private autoPlayInterval: any;
  // Duración 7 segundos para cada banner
  private readonly SLIDE_DURATION = 7000;
  // Detectar dispositivo (Desktop / Mobile)
  public isMobile = signal(false);
  // Obtener mes actual
  public currentMonth = computed(() => {
    const date = new Date();
    const monthsInSpanish = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return monthsInSpanish[date.getMonth()];
  });

  // Lista de texto de promoción (TOP)
  public promoTextsList = computed(() => {
    const baseText = `Promociones de ${this.currentMonth()}`;
    return Array(6).fill(baseText);
  });

  // Lista de texto promoción (BOTTOM)
  public brandTextsList = computed(() => {
    const baseText = `DISTRIBUIDOR AUTORIZADO AUSTROMEX`;
    return Array(6).fill(baseText);
  });

  // Información de los banners
  public promociones = [
    {
      id: 1,
      titulo: 'Promo Austromex - Envío Gratis',
      imgDesktop: 'assets/brand/austromex/promo-austromex/promoH1.webp',
      imgMobile: 'assets/brand/austromex/promo-austromex/promoV1.webp',
      link: 'https://mersolsureste.com.mx/tienda',
      alt: 'Promoción envío gratis Austromex',
    },
    {
      id: 2,
      titulo: 'Nueva Colección Industrial',
      imgDesktop: 'assets/brand/austromex/promo-austromex/promoH2.webp',
      imgMobile: 'assets/brand/austromex/promo-austromex/promoV2.webp',
      link: 'https://mersolsureste.com.mx/tienda',
      alt: 'Nuevos productos industriales Mersol',
    },
  ];

  // Actualizar estado dependiendo del dispositivo (Desktop / Mobile)
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkBreakpoint();
  }

  // Iniciar componente
  ngOnInit(): void {
    this.checkBreakpoint();
    this.startAutoPlay();
  }

  // Limpiar componente
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Verificar tamaño de la pantalla actual (Desktop / Mobile)
  private checkBreakpoint(): void {
    const mobileState = window.innerWidth <= 768;
    if (this.isMobile() !== mobileState) {
      this.isMobile.set(mobileState);
      this.cdr.markForCheck();
    }
  }

  // Recorrer automáticamente lista de banners
  public startAutoPlay(): void {
    this.stopAutoPlay();
    if (this.promociones.length > 1) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.SLIDE_DURATION);
    }
  }

  // Detener el recorrido automático
  public stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  // Lógica de transición automática
  public nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.promociones.length;
    this.currentIndex.set(next);
    this.cdr.markForCheck();
  }
}
