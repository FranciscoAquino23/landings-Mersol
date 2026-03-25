import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SocialLinks],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  // Alternar estado del menú hamburguesa (Abrir / Cerrar)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar menú hamburguesa (Útil al hacer clic en un link)
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Cerrar menú automáticamente
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 991 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
