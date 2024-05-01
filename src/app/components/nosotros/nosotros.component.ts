import { Component } from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
  constructor(public publicService: PublicService) {}

  onLogoLoad() {
    this.publicService.imgNosotros = true;
  }
}
