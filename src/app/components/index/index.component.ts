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
    },
    {
      icon: faGoogle,
      href: 'https://share.google/fQfAOevf8WdL4AFba',
      title: 'Contacto - Grúas CL - Servicio Grúas',
    },
    {
      icon: faInstagram,
      href: 'https://instagram.com/gruascl247?utm_source=qr',
      title: 'Instagram - Grúas CL - Servicio Grúas',
    },
    {
      icon: faTiktok,
      href: 'https://vm.tiktok.com/ZMMY9RUkn/',
      title: 'Tik Tok - Grúas CL - Servicio Grúas',
    },
  ];

  constructor(public publicService: PublicService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Optimización FID - Diferir tareas no críticas
    this.scheduleNonCriticalTasks();
  }

  private scheduleNonCriticalTasks() {
    // Usar requestIdleCallback para tareas no críticas solo en el navegador (SSR-safe)
    const window = this.publicService.getWindow();
    if (!window) {
      // En SSR, ejecutar inmediatamente las tareas críticas
      this.initializeAnalytics();
      return;
    }

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
      setTimeout(
        () => idleCallback({ timeRemaining: () => 50, didTimeout: true }),
        1
      );
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
}
