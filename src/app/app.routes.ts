import { Routes } from '@angular/router';

// Configurar rutas principales
export const routes: Routes = [
  {
    path: '',
    // Verificar coincidencia de la ruta con estructura de código
    loadComponent: () =>
      import('./pages/landing-demo.component/landing-demo.component').then(
        (m) => m.LandingDemoComponent,
      ),

    // Metadatos (Open Graph)
    data: {
      title: 'Mersol | Soluciones Industriales y Distribuidor Austromex',
      description:
        'Expertos en equipos de soldadura y consumibles industriales. La solución integral para tu empresa.',
      ogImage: 'assets/landing/landing-demo/og-main.jpg',
    },
  },
  {
    // Manejar URL's no definidas (Error - 404)
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
