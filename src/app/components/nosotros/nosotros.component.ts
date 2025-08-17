import { Component } from '@angular/core';
import { PublicService } from '@services/Public/public.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
  urlBaseImg = environment.urlBaseImg;

  constructor(public publicService: PublicService) {}

  onLogoLoad() {
    this.publicService.imgNosotros = true;
  }
}
