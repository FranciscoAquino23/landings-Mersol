/* ==========================================================================
   APP CONFIGURATION LOGIC
   ========================================================================== */

import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
// 1. Importar proveedor de HTTP
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 2. Registrar proveedor de HTTP
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top',
      }),
      withEnabledBlockingInitialNavigation(),
    ),
  ],
};
