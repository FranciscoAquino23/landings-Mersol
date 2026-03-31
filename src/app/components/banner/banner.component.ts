/* ==========================================================================
     BANNER COMPONENT LOGIC
     ========================================================================== */

import { Component, OnInit, OnDestroy, signal, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  public currentIndex = signal(0);
  private autoPlayInterval: any;

  // Detectar dispositivo (Desktop / Mobile)
  public isMobile = signal(false);

  // Información de los banners
  public promociones = [
    {
      id: 1,
      titulo: 'Promo Austromex - Envío Gratis',
      imgDesktop: 'assets/brand/promo/promoH1.webp',
      imgMobile: 'assets/brand/promo/promoV1.webp',
      link: 'https://mersolsureste.com.mx/productos/austromex',
      alt: 'Promoción envío gratis Austromex',
    },
    {
      id: 2,
      titulo: 'Nueva Colección Industrial',
      imgDesktop: 'assets/brand/promo/promoH2.webp',
      imgMobile: 'assets/brand/promo/promoV2.webp',
      link: 'https://mersolsureste.com.mx/ofertas',
      alt: 'Nuevos productos industriales Mersol',
    },
  ];

  // Actualizar el estado dependiendo del dispositivo
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkBreakpoint();
  }

  ngOnInit(): void {
    this.checkBreakpoint();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private checkBreakpoint(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }

  // Obtener la imagen correcta de acuerdo al dispositivo
  public getActiveImage(promo: any): string {
    return this.isMobile() ? promo.imgMobile : promo.imgDesktop;
  }

  // Lógica de recorrido automático
  public startAutoPlay(): void {
    this.stopAutoPlay();
    if (this.promociones.length > 1) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  // Detener el recorrido automático
  public stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  // Navegación mediante botones (UI / UX)
  public nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.promociones.length;
    this.currentIndex.set(next);
  }

  // Deslizamiento hacia atrás
  public prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.promociones.length) % this.promociones.length;
    this.currentIndex.set(prev);
  }

  // Deslizamiento hacia adelante
  public goToSlide(index: number): void {
    this.currentIndex.set(index);
    this.startAutoPlay();
  }
}
