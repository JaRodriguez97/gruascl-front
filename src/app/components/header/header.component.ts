import { Component } from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuItems = [
    { href: 'inicio', label: 'Inicio', ariaLabel: 'Ir a sección inicio' },
    { href: 'nosotros', label: 'Nosotros', ariaLabel: 'Ir a sección nosotros' },
    {
      href: 'servicios',
      label: 'Servicios',
      ariaLabel: 'Ver servicios de grua',
    },
    {
      href: 'trabajos',
      label: 'Trabajos',
      ariaLabel: 'Ver trabajos realizados',
    },
    {
      href: 'testimonios',
      label: 'Reseñas',
      ariaLabel: 'Ver reseñas de clientes',
    },
    {
      href: 'contacto',
      label: 'Contáctanos',
      ariaLabel: 'Contactar gruas Cali',
    },
  ];

  constructor(public publicService: PublicService) {}

  toogleMenu() {
    this.publicService.servicios = true;
    this.publicService.trabajos = true;
    this.publicService.testimonios = true;
    this.publicService.contactImg = true;

    this.publicService.menuToggle = !this.publicService.menuToggle;
    this.publicService.menu = !this.publicService.menu;
  }
}
