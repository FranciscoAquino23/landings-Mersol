/* ==========================================================================
   APP CONFIGURATION LOGIC
   ========================================================================== */

import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // Configurar desplazamiento para manejar anclas dinámicas
      withInMemoryScrolling({
        // Permitir desplazamiento dentro de la pagina
        anchorScrolling: 'enabled',
        // permitir restaurar la posición de desplazamiento al volver a una ruta anterior
        scrollPositionRestoration: 'top',
      }),
      withEnabledBlockingInitialNavigation(),
    ),
  ],
};
