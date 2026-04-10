/* ==========================================================================
   LEADS SERVICE LOGIC
   ========================================================================== */

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  [key: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  private readonly http = inject(HttpClient);

  // Evitar saturación de la API
  private lastSubmissionTime = 0;
  private readonly COOLDOWN_MS = 60_000;

  // Modificar por API real
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Enviar información del formulario de contacto (Leads)
  sendLead(leadData: LeadPayload): Observable<unknown> {
    const now = Date.now();
    // Validar RateLimit
    const remaining = Math.ceil((this.COOLDOWN_MS - (now - this.lastSubmissionTime)) / 1000);

    if (now - this.lastSubmissionTime < this.COOLDOWN_MS) {
      return throwError(
        () => new Error(`Por favor, espera ${remaining} segundos antes de enviar otro mensaje.`),
      );
    }

    // Enriquecer el payload con UTMs capturados
    const enrichedPayload = {
      ...leadData,
      utms: this.getStoredUtms() ?? {},
      submittedAt: new Date().toISOString(),
    };

    return this.http.post(this.apiUrl, enrichedPayload).pipe(
      retry({
        count: 2,
        delay: (_err, retryCount) => timer(retryCount * 1_000),
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err)),
    );
  }

  // Registrar último envío del formulario exitoso
  recordSuccessfulSubmission(): void {
    this.lastSubmissionTime = Date.now();
  }

  // Recuperar UTM'S guardados
  getStoredUtms(): Record<string, string> | null {
    if (typeof window === 'undefined') return null;
    const stored = sessionStorage.getItem('user_utms');
    return stored ? JSON.parse(stored) : null;
  }

  // Procesar errores de petición
  private handleError(error: HttpErrorResponse): Observable<never> {
    const messages: Record<number, string> = {
      // Manejar error de conexión
      0: 'Sin conexión a internet o el servidor no responde.',
      // Manejar error de input (UI/UX)
      400: 'Los datos enviados son incorrectos. Revisa los campos.',
      // Manejar error de saturación del servicio
      429: 'Has enviado demasiados mensajes. Intenta más tarde.',
      // Manejar error de servidor no disponible
      404: 'El servicio de contacto no está disponible en este momento.',
    };
    // Manejar error de falla general
    const message =
      messages[error.status] ?? 'Ocurrió un error inesperado. Por favor, intenta de nuevo.';

    // Mostrar mensajes de erorr en pantalla
    console.error(`[LeadsService] HTTP ${error.status}: ${error.message}`);
    return throwError(() => new Error(message));
  }
}
