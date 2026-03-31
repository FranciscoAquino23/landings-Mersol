/* ==========================================================================
   ROOT COMPONENT ROUTES
   ========================================================================== */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Ruta principal (Landing Page)
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then((m) => m.LandingComponent),

    data: {
      title: 'Austromex | Soluciones en Soldadura y Abrasivos',
      description: 'Líderes en equipos y consumibles industriales.',
      ogImage: 'assets/brand/og-main.jpg',
    },
  },

  // Redireccionar cualquier ruta no definida a la ruta principal
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
