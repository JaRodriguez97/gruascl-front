import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGoogle = faGoogle;
  faTiktok = faTiktok;
  faWhatsapp = faWhatsapp;

  constructor(public publicService: PublicService) {}

  ngOnInit() {}

  onLogoLoad() {
    this.publicService.imgIndex = true;
  }

  sendClick(event: string) {
    this.publicService.sendClick(event).subscribe({
      next: () => {},
      error: (e) => console.error(e),
    });
  }

  toogleMenu() {
    this.publicService.servicios = true;
    this.publicService.trabajos = true;
    this.publicService.testimonios = true;
    this.publicService.contactImg = true;
  }
}
