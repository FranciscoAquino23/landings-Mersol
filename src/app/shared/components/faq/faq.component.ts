/* ==========================================================================
   FAQ (QUESTIONS / ANSWERS) LOGIC
   ========================================================================== */

import { Component, Input } from '@angular/core';
import { LandingFaqConfig, LandingFaqItem } from '../../models/landing-config.interface';

interface FaqItem extends LandingFaqItem {
  isOpen: boolean;
}

// Información default el componente FAQ
const DEFAULT_OVERLINE = 'SERVICIO TÉCNICO Y SOPORTE';
const DEFAULT_TITLE = 'PREGUNTAS <br /> FRECUENTES';
const DEFAULT_DESC =
  'Resolvemos tus dudas principales sobre nuestros servicios, equipos y procesos.';

// Información de las (preguntas/respuestas) - Componente compartido
const DEFAULT_ITEMS: LandingFaqItem[] = [
  {
    pregunta: '¿Qué es Mersol Sureste y qué tipo de soluciones ofrece?',
    respuesta:
      'Empresa especializada en soluciones industriales, enfocada en soldadura, corte, herramientas, abrasivos y equipo de protección personal.',
  },
  {
    pregunta: '¿En qué sectores industriales tiene experiencia Mersol Sureste?',
    respuesta:
      'Atendemos sectores como metalmecánico, construcción, manufactura, mantenimiento industrial y energía.',
  },
  {
    pregunta: '¿Los productos son originales y cuentan con garantía de fábrica?',
    respuesta:
      'Sí, todos nuestros productos son 100% originales y cuentan con garantía directa del fabricante.',
  },
  {
    pregunta: '¿Manejan productos especializados o bajo pedido?',
    respuesta:
      'Sí, podemos conseguir equipos y consumibles especializados bajo pedido según tus necesidades.',
  },
  {
    pregunta: '¿Realizan envíos a toda la República Mexicana?',
    respuesta: 'Sí, realizamos envíos a todo México con opciones rápidas y seguras.',
  },
  {
    pregunta: '¿Puedo recoger mi pedido en sucursal?',
    respuesta: 'Sí, puedes recoger directamente en cualquiera de nuestras sucursales.',
  },
  {
    pregunta: '¿Manejan precios especiales por volumen o mayoreo?',
    respuesta:
      'Sí, ofrecemos precios preferenciales para compras por volumen y clientes recurrentes.',
  },
  {
    pregunta: '¿Ofrecen crédito a empresas?',
    respuesta: 'Sí, contamos con opciones de crédito sujetas a evaluación.',
  },
  {
    pregunta: '¿Venden refacciones originales?',
    respuesta:
      'Sí, manejamos refacciones originales para asegurar el correcto funcionamiento de tus equipos.',
  },
  {
    pregunta: '¿Atienden proyectos industriales o compras a gran escala?',
    respuesta:
      'Sí, brindamos atención especializada para proyectos industriales y compras de alto volumen.',
  },
];

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  overline = DEFAULT_OVERLINE;
  title = DEFAULT_TITLE;
  description = DEFAULT_DESC;
  faqs: FaqItem[] = DEFAULT_ITEMS.map((i) => ({ ...i, isOpen: false }));

  // Recibir información de la configuración de la sección de FAQ para cada landing
  @Input() set faqConfig(config: LandingFaqConfig | undefined) {
    if (config == null) return;
    if (config.overline) this.overline = config.overline;
    if (config.title) this.title = config.title;
    if (config.description) this.description = config.description;
    this.faqs = config.items.map((i) => ({ ...i, isOpen: false }));
  }

  // Modificar estado de la pregunta (Abierto/Cerrado)
  toggleFaq(index: number): void {
    const targetState = !this.faqs[index].isOpen;
    // Cerrar todas las preguntas exceptuando la seleccionada
    this.faqs.forEach((item) => (item.isOpen = false));
    this.faqs[index].isOpen = targetState;
  }
}
