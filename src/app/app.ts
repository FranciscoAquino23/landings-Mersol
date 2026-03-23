import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importar componentes de la aplicación
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Título de la aplicación
  protected readonly title = signal('Mersol - Soluciones Industriales');
}
