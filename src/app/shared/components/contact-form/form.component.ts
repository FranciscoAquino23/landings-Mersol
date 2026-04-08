/* ==========================================================================
   CONTACT FORM LOGIC
   ========================================================================== */

import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar componentes y servicios
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadsService } from '../../services/leads.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class ContactFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private leadsService = inject(LeadsService);
  private seoService = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);

  // Formulario
  contactForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  showSuccessModal = false;
  showDropdown = false;
  filteredEstados: string[] = [];

  // Información de estados de México
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

  // Regex para validar formato de email
  ngOnInit(): void {
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    // Configuración inicial del formulario
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: [''],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      estado: ['', [Validators.required]],
      codigoPostal: ['', [Validators.pattern('^[0-9]{5}$')]],
      esCliente: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      website_url: [''],
    });

    // Filtrar estados en tiempo real (UI/UX)
    this.contactForm.get('estado')?.valueChanges.subscribe((value) => {
      this.handleStateFiltering(value);
    });
  }

  // Actualizar la lista de estados (UI/UX)
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

  // Seleccionar estado desde el dropdown (UI/UX)
  selectEstado(estado: string): void {
    this.contactForm.get('estado')?.setValue(estado, { emitEvent: false });
    this.showDropdown = false;
  }

  // Mostrar ventana de éxito
  openSuccessModal(): void {
    this.showSuccessModal = true;
    document.body.style.overflow = 'hidden';
    this.cdr.detectChanges();
  }

  // Cerrar ventada de éxito
  closeSuccessModal(): void {
    this.showSuccessModal = false;

    this.contactForm.reset({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      estado: '',
      codigoPostal: '',
      esCliente: '',
      mensaje: '',
      website_url: '',
    });

    document.body.style.overflow = 'auto';
    this.showDropdown = false;
    this.cdr.detectChanges();
  }

  // Enviar formulario
  onSubmit(): void {
    this.errorMessage = '';

    // Validar Honeypot
    if (this.contactForm.get('website_url')?.value) {
      return;
    }

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.cdr.detectChanges();

      const utmInfo = this.leadsService.getStoredUtms();
      const { website_url, ...formData } = this.contactForm.value;

      // Construir payload con información del formulario
      const payload = {
        to: 'ventas@mersolsureste.com.mx',
        data: formData,
        utm_info: utmInfo,
        timestamp: new Date(),
        source: 'Landing Page Mersol',
      };

      this.leadsService.sendLead(payload).subscribe({
        next: () => {
          this.isSubmitting = false;

          // Tracking de conversión
          this.seoService.trackEvent('conversion_lead_form', {
            source: 'landing_mersol',
            campaign: utmInfo?.utm_campaign || 'direct',
          });

          this.openSuccessModal();
        },
        // Manejar de errores
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.message;
          this.cdr.detectChanges();
        },
      });
    } else {
      // Marcar campos y mostrar errores de validación
      this.contactForm.markAllAsTouched();
      const firstInvalid = document.querySelector('.is-invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}
