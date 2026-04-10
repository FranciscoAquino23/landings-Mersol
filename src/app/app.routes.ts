/* ==========================================================================
   ROOT COMPONENT ROUTES
   ========================================================================== */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Landing Austromex
    path: 'austromex',
    loadComponent: () =>
      import('./pages/landing-austromex/landing-austromex.component').then(
        (m) => m.LandingComponent,
      ),

    data: {
      title: 'Austromex | Soluciones en Soldadura y Abrasivos',
      description: 'Líderes en equipos y consumibles industriales.',
      ogImage: 'assets/brand/og-main.jpg',
    },
  },

  {
    // Landing DeWALT
    path: 'dewalt',
    loadComponent: () =>
      import('./pages/landing-dewalt/landing-dewalt.component').then(
        (m) => m.LandingDeWALTComponent,
      ),
    data: {
      title: 'DeWALT en Mersol Sureste | Herramientas Profesionales',
      description: 'Distribuidor autorizado DeWALT en el sureste mexicano.',
      ogImage: 'assets/landing/landing-dewalt/dewalt-preview.webp',
    },
  },

  {
    // Ruta de prueba
    path: 'landing-demo',
    loadComponent: () =>
      import('./pages/landing-austromex/landing-austromex.component').then(
        (m) => m.LandingComponent,
      ),

    data: {
      title: 'Landing Demo | Mersol Sureste',
      description: 'Espacio de pruebas para maquetación.',
      ogImage: 'assets/brand/og-main.jpg',
    },
  },

  // Redireccionar cualquier ruta no definida a la landing principal (Austromex)
  {
    path: '**',
    redirectTo: 'austromex',
    pathMatch: 'full',
  },
];
