/* ==========================================================================
   NAVBAR COMPONENT LOGIC
   ========================================================================== */

import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importación de componentes compartidos
import { SocialComponent } from '../../shared/components/social-links/social.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SocialComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // Controlar estado del menú (Abierto / Cerrado)
  public isMenuOpen = false;

  // Cambiar estilo del menú (Desktop / Mobile)
  public isScrolled = false;

  // Constructor principal
  constructor(
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller,
  ) {}

  // Reconocer y modificar estilos del menú
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = offset > 50;
  }

  // Alternar estado del menú (Mobile)
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Bloquear o liberar el menú principal
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  // Cerrar menú directamente
  public closeMenu(): void {
    this.isMenuOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  // Direccionar al usuario a la sección seleccionada
  public scrollToAnchor(elementId: string): void {
    this.closeMenu();
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 150);
  }

  // Reconocer y modificar estilos del menú
  @HostListener('window:resize', ['$event'])
  protected onResize(event: any): void {
    if (event.target.innerWidth > 991 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
