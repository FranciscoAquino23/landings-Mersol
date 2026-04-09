/* ==========================================================================
   LEADS SERVICE LOGIC
   ========================================================================== */

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  private readonly http = inject(HttpClient);

  // Evitar saturación de la API
  private lastSubmissionTime: number = 0;
  private readonly COOLDOWN_MS = 60000;

  // Modificar por API real
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Enviar información del formulario de contacto
  sendLead(leadData: any): Observable<any> {
    const currentTime = Date.now();

    // Validar RateLimit
    if (currentTime - this.lastSubmissionTime < this.COOLDOWN_MS) {
      const remainingSeconds = Math.ceil(
        (this.COOLDOWN_MS - (currentTime - this.lastSubmissionTime)) / 1000,
      );
      return throwError(
        () =>
          new Error(
            `Has enviado un mensaje recientemente. Por favor, espera ${remainingSeconds} segundos.`,
          ),
      );
    }

    // Manejar errores de conexión
    return this.http
      .post(this.apiUrl, leadData)
      .pipe(
        retry({
          count: 2,
          delay: (error, retryCount) => timer(retryCount * 1000),
        }),
        // Actualizar petición
        catchError((err) => {
          return this.handleError(err);
        }),
      )
      .pipe(
        // Procesar petición
        catchError((err) => {
          if (err.message.includes('espera')) return throwError(() => err);
          return this.handleError(err);
        }),
      );
  }

  // Almacenar los UTM's
  getStoredUtms(): any {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('user_utms');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  }

  // Registrar tiempo del último envío exitoso
  setLastSubmissionTime(): void {
    this.lastSubmissionTime = Date.now();
  }

  // Procesar errores de petición
  private handleError(error: HttpErrorResponse) {
    let userFriendlyMessage = 'Ocurrió un error inesperado. Por favor, intenta de nuevo.';

    if (error.status === 0) {
      // Manejar error de conexión
      userFriendlyMessage = 'No hay conexión a internet o el servidor no responde.';
    } else if (error.status === 400) {
      // Manejar error de input (UI/UX)
      userFriendlyMessage = 'Los datos enviados son incorrectos. Revisa los campos.';
    } else if (error.status === 429) {
      // Manejar error de saturación del servicio
      userFriendlyMessage = 'Has enviado demasiados mensajes. Intenta más tarde.';
    } else if (error.status === 404) {
      // Manejar error de servidor no disponible
      userFriendlyMessage = 'El servicio de contacto no se encuentra disponible actualmente.';
    }

    // Mostrar mensajes de erorr en pantalla
    console.error(`[Error de Lead]: Código ${error.status}, mensaje: ${error.message}`);
    return throwError(() => new Error(userFriendlyMessage));
  }
}
