/* ==========================================================================
      FOOTER COMPONENT LOGIC
      ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Actualizar año automáticamente
  public currentYear: number = new Date().getFullYear();
}
