import { Component, HostListener, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faWhatsapp = faWhatsapp;

  menuItems = [
    { href: 'inicio', label: 'Inicio', ariaLabel: 'Ir a sección inicio' },
    { href: 'nosotros', label: 'Nosotros', ariaLabel: 'Ir a sección nosotros' },
    { href: 'servicios', label: 'Servicios', ariaLabel: 'Ver servicios de grua' },
    { href: 'trabajos', label: 'Trabajos', ariaLabel: 'Ver trabajos realizados' },
    { href: 'testimonios', label: 'Reseñas', ariaLabel: 'Ver reseñas de clientes' },
    { href: 'contacto', label: 'Contáctanos', ariaLabel: 'Contactar gruas Cali' }
  ];

  constructor(public publicService: PublicService) {}

  ngOnInit() {}

  @HostListener('window:scroll')
  scrolling(): void {
    let { scrollY, innerHeight } = window;
    let { isMobile } = this.publicService;

    // Header
    this.publicService.sticky = scrollY > 0;

    // Botones fijos
    let scroll = isMobile ? innerHeight * 0.65 : 320,
      scrollHide = isMobile ? innerHeight * 10.3 : innerHeight * 6.3;

    this.publicService.show = scrollY > scroll && scrollY < scrollHide;

    // Servicios
    if (scrollY >= scroll) this.publicService.servicios = true;

    // Trabajos
    let multiplicadorTrabajos = isMobile ? 4 : 2.3;

    if (scrollY >= innerHeight * multiplicadorTrabajos)
      this.publicService.trabajos = true;

    // testimonios
    let multiplicadorReseñas = isMobile ? 7 : 4;

    if (scrollY >= innerHeight * multiplicadorReseñas)
      this.publicService.testimonios = true;

    // imagen contacto
    let scrollShow = isMobile ? 9.3 : 5.3;

    if (scrollY > innerHeight * scrollShow)
      this.publicService.contactImg = true;
  }

  toogleMenu() {
    this.publicService.servicios = true;
    this.publicService.trabajos = true;
    this.publicService.testimonios = true;
    this.publicService.contactImg = true;

    this.publicService.menuToggle = !this.publicService.menuToggle;
    this.publicService.menu = !this.publicService.menu;
  }

  sendClick(event: string) {
    this.publicService.sendClick(event).subscribe({
      next: () => {},
      error: (e) => console.error(e),
    });
  }
}
