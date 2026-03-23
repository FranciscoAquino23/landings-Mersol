import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componente principal de la landing page
@Component({
  selector: 'app-landing-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-demo.component.html',
  styleUrl: './landing-demo.component.scss',
})
export class LandingDemoComponent {
  // Gestionar lógica de la aplicación
}
