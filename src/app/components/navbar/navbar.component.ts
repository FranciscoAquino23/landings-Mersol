/* ==========================================================================
    NAVBAR COMPONENT LOGIC
   ========================================================================== */

import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importar componentes
import { SocialComponent } from '../../shared/components/social-links/social.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SocialComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
// Lógica de navegación (MEDIA QUERIES)
export class NavbarComponent {
  public isMenuOpen = false;
  public isScrolled = false;

  constructor(
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller,
  ) {}

  // Detectar movimiento para cambiar el estilo de la barra de navegación
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = offset > 50;
  }

  // Alternar estilo del menú (Desktop / Mobile)
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  // Cerrar menú
  public closeMenu(): void {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  // Direccionar correctamente al usuario a la sección seleccionada
  public scrollToAnchor(elementId: string): void {
    this.closeMenu();

    setTimeout(() => {
      // Caso 1: Regresar al inicio
      if (elementId === 'home' || elementId === 'inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        // Caso 2: Regresar a alguna sección específica
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 150);
  }

  // Cerrar menú automáticamente
  @HostListener('window:resize', ['$event'])
  protected onResize(event: any): void {
    if (event.target.innerWidth > 991 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
