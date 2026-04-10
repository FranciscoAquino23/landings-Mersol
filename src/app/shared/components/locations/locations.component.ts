/* ==========================================================================
   LOCATIONS LOGIC
   ========================================================================== */

import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LandingBranch } from '../../models/landing-config.interface';

// Información de las ubicaciones de las sucursales (Componente compartido)
const DEFAULT_BRANCHES: LandingBranch[] = [
  {
    name: 'Villahermosa, TAB',
    address: 'Av. Ruiz Cortines 2001-B, Col. Atasta, Villahermosa, TAB, C.P. 86100',
    phone: '(993) 354-4023 • (993) 354-7657 • (993) 161-4479',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d948.7070888024072!2d-92.95968200000002!3d17.986721!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85edd7899875a39f%3A0x27cd52aa1ad690b6!2sMersol%20Sureste%20Villahermosa!5e0!3m2!1ses-419!2sus!4v1775078801107!5m2!1ses-419!2sus',
  },
  {
    name: 'Veracruz, VER',
    address: 'Manuel de Jesús Clouthier 5417 L-15, Col. Amapolas, Veracruz, VER, C.P. 91698',
    phone: '(229) 920-8577 • (229) 931-1630 • (229) 260-8910',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.10905557776897!2d-96.1922!3d19.15706!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85c34127b4214919%3A0x58189403ee35a26b!2sMersol%20Sureste%20Veracruz!5e0!3m2!1ses-419!2sus!4v1775078669935!5m2!1ses-419!2sus',
  },
  {
    name: 'Mérida, YUC',
    address: 'Perif. de Mérida Lic. Manuel Berzunza SN, Tixcacal Opichen, 97314 Mérida, Yuc.',
    phone: '(999) 400-5855',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.4780136846819!2d-89.67493617320106!3d20.994399705770117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x8f5673c32eb817b3%3A0x33906a9f81e7b8a0!2sPerif.%20de%20M%C3%A9rida%20Lic.%20Manuel%20Berzunza%2C%20Yucat%C3%A1n!5e0!3m2!1ses-419!2smx!4v1775149557618!5m2!1ses-419!2smx',
  },
  {
    name: 'Apodaca, NL',
    address: 'Regioavenida 116, Regio Parque Industrial, Cd. Apodaca, NL, C.P. 66633',
    phone: '(81) 8123-1164 • (81) 8123-1215',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d898.438239431687!2d-100.216262!3d25.745682!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x866295ed8d561cb3%3Ab253f4f5e95bb375!2sMersol%20Sureste%20CEDIS%20APODACA!5e0!3m2!1ses-419!2sus!4v1775078631827!5m2!1ses-419!2sus',
  },
  {
    name: 'Campeche, CAM',
    address: 'Av. Gobernadores 72, Col. Santa Lucia, Campeche, CAM, C.P. 24020',
    phone: '(981) 827-9038',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.5591245016365!2d-90.506222!3d19.842238!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85f831b15429c451%3A0xd25968b749d6560b!2sMersol%20Sureste%20Campeche!5e0!3m2!1ses-419!2sus!4v1775078841190!5m2!1ses-419!2sus',
  },
  {
    name: 'Paraíso, TAB',
    address: 'Carretera Paraíso - Dos Bocas KM 1 S/N, Col. El Limón, Paraíso, TAB, C.P. 86600',
    phone: '(933) 333-4692 • (933) 333-4564 • (933) 333-4942',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d473.21202703886235!2d-93.215647!3d18.406672!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85ee8fa936e38025%3A0x9c06480451266e81!2sMersol%20Sureste%20Para%C3%ADso!5e0!3m2!1ses-419!2sus!4v1775078771604!5m2!1ses-419!2sus',
  },
  {
    name: 'Tula, HGO',
    address:
      'Ctra. Federal Tula - Refinería Km 4.5, El Llano, 2da. sección, Tula de Allende, HGO, C.P. 42803',
    phone: '(773) 688-2091 • (773) 688-3089',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d468.4798639267234!2d-99.295963!3d20.057189!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x85d22d04181e4587%3A0x5dfc38ceeb6ef77c!2sMersol%20Sureste%20Tula%20de%20Allende!5e0!3m2!1ses-419!2sus!4v1775078581714!5m2!1ses-419!2sus',
  },
];

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  public safeMapUrl!: SafeResourceUrl;
  public activeIndex = 0;
  public branches: LandingBranch[] = DEFAULT_BRANCHES;

  // Recibir información de la configuración de las surcurales para cada landing
  @Input() set locations(value: LandingBranch[] | undefined) {
    if (value != null) this.branches = value;
  }

  constructor(private sanitizer: DomSanitizer) {}

  // Iniciar componente
  ngOnInit(): void {
    this.selectBranch(0);
  }

  // Seleccionar sucursal y actualizar el mapa
  public selectBranch(index: number): void {
    this.activeIndex = index;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.branches[index].mapEmbedUrl,
    );
  }
}
