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
    // Landing Lincoln Electric
    path: 'lincoln',
    loadComponent: () =>
      import('./pages/landing-lincoln/landing-lincoln.component').then(
        (m) => m.LandingLincolnComponent,
      ),
    data: {
      title: 'Lincoln Electric | La solución en soldadura',
      description:
        'Expertos en equipos de soldadura, consumibles y soluciones de automatización. Distribuidor autorizado Lincoln Electric en el sureste mexicano.',
      ogImage: 'assets/brand/lincoln/mersol-preview.webp',
    },
  },

  {
    // Landing Milwaukee Tool
    path: 'milwaukee',
    loadComponent: () =>
      import('./pages/landing-milwaukee/landing-milwaukee.component').then(
        (m) => m.LandingMilwaukeeComponent,
      ),
    data: {
      title: 'Milwaukee Tool | Nada más que trabajo pesado',
      description:
        'Expertos en herramientas inalámbricas de alto rendimiento y tecnología FUEL. Distribuidor autorizado Milwaukee Tool en el sureste mexicano.',
      ogImage: 'assets/brand/milwaukee/mersol-preview.webp',
    },
  },

  {
    // Landing URREA
    path: 'urrea',
    loadComponent: () =>
      import('./pages/landing-urrea/landing-urrea.component').then((m) => m.LandingUrreaComponent),
    data: {
      title: 'URREA | Herramientas Profesionales',
      description:
        'Expertos en soluciones totales para la industria y el mantenimiento. Distribuidor autorizado URREA en el sureste mexicano.',
      ogImage: 'assets/brand/urrea/mersol-preview.webp',
    },
  },

  {
    // Landing Hypertherm
    path: 'hypertherm',
    loadComponent: () =>
      import('./pages/landing-hypertherm/landing-hypertherm.component').then(
        (m) => m.LandingHyperthermComponent,
      ),
    data: {
      title: 'Hypertherm | Líderes en Corte por Plasma',
      description:
        'Distribuidor autorizado Hypertherm en el sureste mexicano. Sistemas Powermax, plasma mecanizado y consumibles originales para corte industrial.',
      ogImage: 'assets/brand/hypertherm/mersol-preview.webp',
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
