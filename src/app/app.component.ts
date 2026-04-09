/* ==========================================================================
      ROOT COMPONENT LOGIC
   ========================================================================== */

import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importar servicios y componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // Servicio SEO
  private seoService = inject(SeoService);

  protected readonly title = signal('Mersol Sureste - Soluciones Industriales');

  // Capturar parámetros de UTM
  ngOnInit(): void {
    this.seoService.captureUtms();

    // Establecer meta datos
    this.seoService.setMetaTags({
      title: 'Mersol Sureste - Básculas Industriales y Pesaje',
      description:
        'Especialistas en soluciones integrales de pesaje industrial y automatización en el sureste de México.',
      // Modificar dominio real
      url: 'https://mersolsureste.com.mx',
      image: 'https://mersolsureste.com.mx/assets/images/og-main.jpg',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Mersol Sureste',
        alternateName: 'Mersol',
        url: 'https://mersolsureste.com.mx',
        logo: 'https://mersolsureste.com.mx/assets/images/logo.png',
      },
    });
  }
}
