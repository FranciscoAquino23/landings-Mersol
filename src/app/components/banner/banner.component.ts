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
  Input,
} from '@angular/core';
import { LandingPromo } from '../../shared/models/landing-config.interface';

const DEFAULT_PROMOS: LandingPromo[] = [
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

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  public currentIndex = signal(0);
  private autoPlayInterval: any;
  // Indicar duración de cada banner (7 segundos)
  private readonly SLIDE_DURATION = 7000;
  // Detectar dispositivo (Desktop / Mobile)
  public isMobile = signal(false);

  // Backing signals para inputs configurables
  private readonly _promos = signal<LandingPromo[]>(DEFAULT_PROMOS);
  private readonly _brandTagline = signal('DISTRIBUIDOR AUTORIZADO');

  // Sobreescribir valor (tag superior) a nulo en caso de no recibir parámetros
  @Input() set promos(value: LandingPromo[] | undefined) {
    if (value != null) this._promos.set(value);
  }

  // Sobreescribir valor (tag inferior) a nulo en caso de no recibir parámetros
  @Input() set brandTagline(value: string | undefined) {
    if (value != null) this._brandTagline.set(value);
  }

  // Obtener los banners de promoción de cada landing
  get promociones(): LandingPromo[] {
    return this._promos();
  }

  // Obtener el mes actual de manera automática
  public currentMonth = computed(() => {
    const months = [
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
    return months[new Date().getMonth()];
  });

  // Lista de texto de promoción (TOP)
  public promoTextsList = computed(() => {
    return Array(6).fill(`Promociones de ${this.currentMonth()}`);
  });

  // Lista de texto promoción (BOTTOM)
  public brandTextsList = computed(() => {
    return Array(6).fill(this._brandTagline());
  });

  @HostListener('window:resize')
  onResize() {
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
    if (this._promos().length > 1) {
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
    const next = (this.currentIndex() + 1) % this._promos().length;
    this.currentIndex.set(next);
    this.cdr.markForCheck();
  }
}
