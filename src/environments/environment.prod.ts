/* ==========================================================================
   ENVIRONMENT PRODUCTION
   ========================================================================== */

export const environment = {
  production: true,

  // Configurar peticiones HTTP y Leads
  // (use Mock: true -> sin conexión real)
  // (use Mock: false -> conexión a API oficial)
  useMock: false,

  // URL del BackEnd (Modificar por oficial)
  apiLeadsUrl: '/api/leads',
};
