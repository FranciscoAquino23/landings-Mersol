/* ==========================================================================
   FAQ (QUESTIONS / ANSWERS)
   ========================================================================== */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para definir la estructura de cada FAQ
interface FaqItem {
  pregunta: string;
  respuesta: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  // Lista de preguntas y respuestas
  faqs: FaqItem[] = [
    {
      pregunta: '¿Qué es Mersol Sureste y qué tipo de soluciones ofrece?',
      respuesta:
        'Empresa especializada en soluciones industriales, enfocada en soldadura, corte, herramientas, abrasivos y equipo de protección personal.',
      isOpen: false,
    },
    {
      pregunta: '¿En qué sectores industriales tiene experiencia Mersol Sureste?',
      respuesta:
        'Atendemos sectores como metalmecánico, construcción, manufactura, mantenimiento industrial y energía.',
      isOpen: false,
    },
    {
      pregunta: '¿Los productos son originales y cuentan con garantía de fábrica?',
      respuesta:
        'Sí, todos nuestros productos son 100% originales y cuentan con garantía directa del fabricante.',
      isOpen: false,
    },
    {
      pregunta: '¿Manejan productos especializados o bajo pedido?',
      respuesta:
        'Sí, podemos conseguir equipos y consumibles especializados bajo pedido según tus necesidades.',
      isOpen: false,
    },
    {
      pregunta: '¿Realizan envíos a toda la República Mexicana?',
      respuesta: 'Sí, realizamos envíos a todo México con opciones rápidas y seguras.',
      isOpen: false,
    },
    {
      pregunta: '¿Puedo recoger mi pedido en sucursal?',
      respuesta: 'Sí, puedes recoger directamente en cualquiera de nuestras sucursales.',
      isOpen: false,
    },
    {
      pregunta: '¿Manejan precios especiales por volumen o mayoreo?',
      respuesta:
        'Sí, ofrecemos precios preferenciales para compras por volumen y clientes recurrentes.',
      isOpen: false,
    },
    {
      pregunta: '¿Ofrecen crédito a empresas?',
      respuesta: 'Sí, contamos con opciones de crédito sujetas a evaluación.',
      isOpen: false,
    },
    {
      pregunta: '¿Venden refacciones originales?',
      respuesta:
        'Sí, manejamos refacciones originales para asegurar el correcto funcionamiento de tus equipos.',
      isOpen: false,
    },
    {
      pregunta: '¿Atienden proyectos industriales o compras a gran escala?',
      respuesta:
        'Sí, brindamos atención especializada para proyectos industriales y compras de alto volumen.',
      isOpen: false,
    },
  ];

  // Cambiar estado de la pregunta seleccionada (Abierto / Cerrado)
  toggleFaq(index: number): void {
    const targetState = !this.faqs[index].isOpen;
    // Cerrar todas las preguntas exceptuando la seleccionada
    this.faqs.forEach((item) => (item.isOpen = false));
    this.faqs[index].isOpen = targetState;
  }
}
