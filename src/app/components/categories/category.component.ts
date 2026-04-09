/* ==========================================================================
    CATEGORY COMPONENT LOGIC
   ========================================================================== */

import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  ChangeDetectorRef,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz de las categorías de productos
interface Category {
  title: string;
  image: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLElement>;
  private cdr = inject(ChangeDetectorRef);

  private autoPlayInterval: any;
  private restartTimeout: any;

  // Tiempo entre cada movimiento del carrusel
  private readonly INTERVAL_TIME = 4000;
  //Tiempo entre cada movimiento del carrusel (Usuario manual)
  private readonly RESTART_DELAY = 2500;
  private isAnimating = false;
  private readonly GAP = 24;
  public currentIndex = 0;
  private readonly CARDS_TO_SHOW = 4;

  // Información de las categorías de productos
  private readonly _baseCategories = signal<Category[]>([
    {
      title: 'ABRASIVOS SÓLIDOS',
      image: 'assets/brand/austromex/categories-austromex/01.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'PRODUCTOS DE LIJA',
      image: 'assets/brand/austromex/categories-austromex/02.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'PRODUCTOS DE FIBRA',
      image: 'assets/brand/austromex/categories-austromex/03.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'PULIDO Y LIMPIEZA',
      image: 'assets/brand/austromex/categories-austromex/04.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'ESTÉTICA AUTOMOTRIZ',
      image: 'assets/brand/austromex/categories-austromex/05.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'CONSTRUCCIÓN',
      image: 'assets/brand/austromex/categories-austromex/06.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'SUPERABRASIVOS',
      image: 'assets/brand/austromex/categories-austromex/07.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'INDUSTRIA AUTOMOTRIZ',
      image: 'assets/brand/austromex/categories-austromex/08.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'CEPILLOS DE ALAMBRE',
      image: 'assets/brand/austromex/categories-austromex/09.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'HERRAMIENTAS',
      image: 'assets/brand/austromex/categories-austromex/10.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'MÁQUINAS',
      image: 'assets/brand/austromex/categories-austromex/11.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
    {
      title: 'ACCESORIOS',
      image: 'assets/brand/austromex/categories-austromex/12.webp',
      color: '#d2242a',
      link: 'https://mersolsureste.com.mx/tienda?search=AUSTROMEX',
    },
  ]);

  // Duplicar categorías (Efecto loop infinito)
  public displayCategories = computed(() => [
    ...this._baseCategories(),
    ...this._baseCategories().slice(0, 4),
  ]);

  // Iniciar movimiento automático
  ngAfterViewInit(): void {
    this.startAutoPlay();
  }

  // Limpiar el componente actual
  ngOnDestroy(): void {
    this.stopAutoPlay();
    if (this.restartTimeout) clearTimeout(this.restartTimeout);
  }

  // Botón avanzar
  public next(): void {
    this.scroll(1, true);
  }

  // Botón retroceder
  public prev(): void {
    this.scroll(-1, true);
  }

  // Controlar desplazamiento
  scroll(direction: number, isManual = true): void {
    if (this.isAnimating || !this.carouselTrack) return;

    const track = this.carouselTrack.nativeElement;
    const card = track.querySelector('.category-card') as HTMLElement;
    if (!card) return;

    if (isManual) this.stopAutoPlay();

    const maxIndex = this.displayCategories().length - this.CARDS_TO_SHOW;
    this.isAnimating = true;
    this.currentIndex += direction;

    if (this.currentIndex > maxIndex) {
      track.classList.add('no-transition');
      this.currentIndex = 0;
      this.updateCarouselPosition();
      void track.offsetWidth;
      track.classList.remove('no-transition');
      this.currentIndex = 1;
    } else if (this.currentIndex < 0) {
      track.classList.add('no-transition');
      this.currentIndex = maxIndex;
      this.updateCarouselPosition();
      void track.offsetWidth;
      track.classList.remove('no-transition');
      this.currentIndex = maxIndex - 1;
    }

    // Ejecutar el movimiento fluido
    this.updateCarouselPosition();

    // Notificar cambio en la animación
    this.cdr.markForCheck();

    setTimeout(() => {
      this.isAnimating = false;
      if (isManual) {
        this.restartAutoPlayWithDelay();
      }
      // Volvemos a notificar cuando termina la animación
      this.cdr.markForCheck();
    }, 600);
  }

  // Actualizar posición del carrusel
  private updateCarouselPosition(): void {
    const trackElement = this.carouselTrack.nativeElement;
    const card = trackElement.querySelector('.category-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const amountToMove = this.currentIndex * (cardWidth + this.GAP);
    trackElement.style.transform = `translateX(-${amountToMove}px)`;
  }

  // Reiniciar movimiento automático (Usuario manual)
  private restartAutoPlayWithDelay(): void {
    if (this.restartTimeout) clearTimeout(this.restartTimeout);
    this.restartTimeout = setTimeout(() => {
      this.startAutoPlay();
      this.cdr.markForCheck();
    }, this.RESTART_DELAY);
  }

  // Iniciar movimiento automático
  public startAutoPlay(): void {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => {
      this.scroll(1, false);
    }, this.INTERVAL_TIME);
  }

  // Detener movimiento automático
  public stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  // Interacción (Usuario - Categoría)
  onCategoryClick(category: Category): void {
    this.stopAutoPlay();
    window.open(category.link, '_blank');
    this.restartAutoPlayWithDelay();
  }

  // Interacción (Usuario - Carrusel)
  public onMouseEnter(): void {
    this.stopAutoPlay();
  }

  public onMouseLeave(): void {
    if (!this.isAnimating) {
      this.startAutoPlay();
    }
  }
}
