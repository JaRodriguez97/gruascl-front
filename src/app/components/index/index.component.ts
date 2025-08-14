import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

declare function gtag_report_conversion(url?: string): boolean;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faWhatsapp = faWhatsapp;

  socialNetworks = [
    {
      icon: faFacebookF,
      href: 'https://www.facebook.com/share/oNzGDHMsg9DL1bfg/?mibextid=qi2Omg',
      title: 'Facebook - Grúas CL - Servicio Grúas',
      target: '_blank'
    },
    {
      icon: faGoogle,
      href: 'grua-cali#contacto',
      title: 'Contacto - Grúas CL - Servicio Grúas',
      target: null
    },
    {
      icon: faInstagram,
      href: 'https://instagram.com/gruascl247?utm_source=qr',
      title: 'Instagram - Grúas CL - Servicio Grúas',
      target: '_blank'
    },
    {
      icon: faTiktok,
      href: 'https://vm.tiktok.com/ZMMY9RUkn/',
      title: 'Tik Tok - Grúas CL - Servicio Grúas',
      target: '_blank'
    }
  ];

  constructor(public publicService: PublicService) {}

  ngOnInit() {}

  onLogoLoad() {
    this.publicService.imgIndex = true;
  }

  sendClick(event: string) {
    // this.publicService.sendClick(event).subscribe({
    //   next: () => {},
    //   error: (e) => console.error(e),
    // });
    gtag_report_conversion();
  }

  toogleMenu() {
    this.publicService.servicios = true;
    this.publicService.trabajos = true;
    this.publicService.testimonios = true;
    this.publicService.contactImg = true;
  }
}
