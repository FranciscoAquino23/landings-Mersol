/* ==========================================================================
   APP CONFIGURATION LOGIC
   ========================================================================== */

import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

// Importar proveedor de HTTP
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),

    // Registrar proveedor de HTTP
    provideHttpClient(withFetch()),
    provideClientHydration(),
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
