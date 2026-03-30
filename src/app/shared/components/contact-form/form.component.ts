/* ==========================================================================
   CONTACT FORM LOGIC
   ========================================================================== */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  // Controlar mensaje de éxito (Desktop / Mobile)
  showSuccessModal: boolean = false;
  successMessage: string = 'Solicitud enviada con éxito, nos comunicaremos con usted brevemente.';
  showDropdown: boolean = false;
  filteredEstados: string[] = [];

  // Lista del campo de estados
  readonly estadosMexico: string[] = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Ciudad de México',
    'Durango',
    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Validar email mediante un Regex (Expresión Regular)
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    // Validar que el formulario cuente con todos los campos correctamente ingresados
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: [''],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      estado: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });

    // Autocompletar estado escrito por el usuario
    this.contactForm.get('estado')?.valueChanges.subscribe((value) => {
      this.handleStateFiltering(value);
    });
  }

  // Filtrar la lista de estados
  handleStateFiltering(value: string): void {
    const filterValue = value?.toLowerCase() || '';

    if (filterValue.length > 0) {
      this.filteredEstados = this.estadosMexico
        .filter((estado) => estado.toLowerCase().includes(filterValue))
        .slice(0, 5);

      this.showDropdown = this.filteredEstados.length > 0;
    } else {
      this.showDropdown = false;
    }
  }

  // Seleccionar un estado de la lista y cerrar autocompletado
  selectEstado(estado: string): void {
    this.contactForm.get('estado')?.setValue(estado, { emitEvent: false });
    this.showDropdown = false;
  }

  // Activar mensaje de éxito
  openSuccessModal(): void {
    this.showSuccessModal = true;
    document.body.style.overflow = 'hidden';
  }

  // Cerrar mensaje de éxito
  closeSuccessModal(): void {
    this.showSuccessModal = false;
    document.body.style.overflow = 'auto';
  }

  // Procesar envío del formulario
  onSubmit(): void {
    if (this.contactForm.valid) {
      const payload = {
        to: 'ventas@mersolsureste.com.mx',
        data: this.contactForm.value,
        timestamp: new Date(),
      };
      console.log('Enviando a Mersol:', payload);
      this.openSuccessModal();
      // Reiniciar el formulario
      this.contactForm.reset();
      this.showDropdown = false;
    } else {
      // Indicar errores en el formulario
      this.contactForm.markAllAsTouched();
    }
  }
}
