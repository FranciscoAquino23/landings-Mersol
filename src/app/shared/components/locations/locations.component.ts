/* ==========================================================================
   LOCATIONS LOGIC
   ========================================================================== */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Branch {
  name: string;
  address: string;
  phone: string;
  mapEmbedUrl: string;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  public safeMapUrl!: SafeResourceUrl;
  public activeIndex: number = 0;

  // Lista de sucursales disponibles
  public branches: Branch[] = [
    {
      name: 'Villahermosa, TAB',
      address: 'Av. Ruiz Cortines 2001-B, Col. Atasta, Villahermosa, TAB, C.P. 86100',
      phone: '(993) 354-4023 • (993) 354-7657 • (993) 161-4479',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2762419812424!2d-92.9495!3d17.9904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eed95df3f3805d%3A0xe54955b9777df506!2sAv%20Adolfo%20Ruiz%20Cortines%202001%2C%20Atasta%20de%20Serra!5e0!3m2!1ses!2smx!4v1715634000000',
    },
    {
      name: 'Veracruz, VER',
      address: 'Manuel de Jesús Clouthier 5417 L-15, Col. Amapolas, Veracruz, VER, C.P. 91698',
      phone: '(229) 920-8577 • (229) 931-1630 • (229) 260-8910',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.412!2d-96.1823!3d19.1723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3413f00000000%3A0x0!2zMTnCsDEwJzIwLjMiTiA5NsKwMTAnNTYuMyJX!5e0!3m2!1ses!2smx!4v1715634100000',
    },
    {
      name: 'Mérida, YUC',
      address: 'Circuito Colonias 431, Mercedes Barrera, Mérida, YUC, C.P. 97270',
      phone: '(999) 400-5855',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.423!2d-89.6123!3d20.9523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56716f00000000%3A0x0!2zMjDCsDU3JzA4LjMiTiA4OcKwwzM3JzUyLjQiVw!5e0!3m2!1ses!2smx!4v1715634200000',
    },
    {
      name: 'Apodaca, NL',
      address: 'Regioavenida 116, Regio Parque Industrial, Cd. Apodaca, NL, C.P. 66633',
      phone: '(81) 8123-1164 • (81) 8123-1215',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4567!2d-100.1823!3d25.7723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzIwLjMiTiAxMDDCsDEwJzU2LjMiVw!5e0!3m2!1ses!2smx!4v1715634300000',
    },
    {
      name: 'Campeche, Cam',
      address: 'Av. Gobernadores 72, Col. Santa Lucia, Campeche, CAM, C.P. 24020',
      phone: '(981) 827-9038',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4567!2d-90.5223!3d19.8423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUwJzMyLjMiTiA5MMKwMzEnMjAuMyJX!5e0!3m2!1ses!2smx!4v1715634400000',
    },
    {
      name: 'Paraíso, TAB',
      address: 'Carretera Paraíso - Dos Bocas KM 1 S/N, Col. El Limón, Paraíso, TAB, C.P. 86600',
      phone: '(933) 333-4692 • (933) 333-4564 • (933) 333-4942',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.4567!2d-93.2123!3d18.4023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzA4LjMiTiA5M8KwMTInNDQuMyJX!5e0!3m2!1ses!2smx!4v1715634500000',
    },
    {
      name: 'Tula, HIDALGO',
      address:
        'Ctra. Federal Tula - Refinería Km 4.5, El Llano, 2da. sección, Tula de Allende, HGO, C.P. 42803',
      phone: '(773) 688-2091 • (773) 688-3089',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.4567!2d-99.3023!3d20.0123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzQ0LjMiTiA5OcKwMTgnMDguMyJX!5e0!3m2!1ses!2smx!4v1715634600000',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Seleccionar la primera sucursal por defecto
    this.selectBranch(0);
  }

  // Cambiar ubicación del mapa
  public selectBranch(index: number): void {
    this.activeIndex = index;
    const url = this.branches[index].mapEmbedUrl;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
