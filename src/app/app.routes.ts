import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-demo.component/landing-demo.component').then(
        (m) => m.LandingDemoComponent,
      ),
    data: {
      title: 'Mersol - Distribuidores de equipos de soldadura',
      description: '¡La solución a tus necesidades industriales!.',
      ogImage: 'assets/landing/landing-demo/og-main.jpg',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
