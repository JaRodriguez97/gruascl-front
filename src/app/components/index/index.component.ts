import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

declare function gtag_report_conversion(url?: string): boolean;

// Optimización FID - usar tipos nativos de TypeScript

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    // Optimización FID - Diferir tareas no críticas
    this.scheduleNonCriticalTasks();
  }

  private scheduleNonCriticalTasks() {
    // Usar requestIdleCallback para tareas no críticas o fallback con setTimeout
    const idleCallback = (deadline: any) => {
      // Tareas no críticas durante tiempo libre
      if (deadline.timeRemaining() > 0 || deadline.didTimeout) {
        // Precargar analytics de forma diferida
        this.initializeAnalytics();
      }
    };

    if ((window as any).requestIdleCallback) {
      (window as any).requestIdleCallback(idleCallback, { timeout: 2000 });
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      setTimeout(() => idleCallback({ timeRemaining: () => 50, didTimeout: true }), 1);
    }
  }

  private initializeAnalytics() {
    // Inicializar tracking diferido para mejorar FID
    // Esta función ejecuta tareas de analytics de forma no bloqueante
  }

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
