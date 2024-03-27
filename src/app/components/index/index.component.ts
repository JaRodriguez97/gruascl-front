import { Component, OnInit } from '@angular/core';
// import { PublicService } from "@app/services/Public/public.service";
import {
  faFacebookF,
  faInstagram,
  faGoogle,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
// import moduleName from '@fortawesome/free';

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

  constructor() {} // public publicService: PublicService
  ngOnInit() {}
}
