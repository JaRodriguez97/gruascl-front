import { Component, OnInit } from '@angular/core';
import { ContactService } from '@app/services/Contact/contact.service';
import {
  faFacebookF,
  faInstagram,
  faGoogle,
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

  constructor(public contactService: ContactService) {}

  ngOnInit() {}

  sendClick(event: string) {
    this.contactService.sendClick(event).subscribe({
      next: (r) => console.log('se ha dado click en el boton index: ', event, r),
      error: (e) => console.error(e),
      // complete: () => {},
    });
  }
}
