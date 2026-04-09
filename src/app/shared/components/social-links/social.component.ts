/* ==========================================================================
   SOCIAL MEDIA LOGIC
   ========================================================================== */

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  // Lista de redes sociales empresariales
  public socialNetworks = signal([
    {
      name: 'WhatsApp',
      url: 'https://wa.me/529939805654',
      icon: 'assets/brand/shared/socials/whatsapp.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/MersolSuresteOficial',
      icon: 'assets/brand/shared/socials/facebook.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mersolsureste/',
      icon: 'assets/brand/shared/socials/instagram.svg',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mersol.sureste',
      icon: 'assets/brand/shared/socials/tiktok.svg',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@mersolsureste4375',
      icon: 'assets/brand/shared/socials/youtube.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mersolsureste/posts/?feedView=all',
      icon: 'assets/brand/shared/socials/linkedin.svg',
    },
  ]);

  constructor() {}
}
