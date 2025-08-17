import { Component } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent {
  urlBaseImg = environment.urlBaseImg;
  trabajos: { alt: string; title: string; text: string }[] = [];
  btnVisibillity: boolean = true;

  constructor(public publicService: PublicService) {
    this.trabajos = this.generarTrabajos(1, 9);
  }

  private generarTrabajos(desde: number, hasta: number) {
    return Array.from({ length: hasta - desde + 1 }, (_, idx) => {
      const i = desde + idx;
      return {
        alt: `img${i} - Servicio grúa`,
        title: `img${i} - Servicio grúa`,
        text: `Proyecto ${i < 10 ? '0' + i : i}`,
      };
    });
  }

  onPushImage() {
    this.trabajos.push(...this.generarTrabajos(10, 29));
    this.btnVisibillity = false;
  }

  setSrc(i: number) {
    return `${this.urlBaseImg}trabajosImg/img${i + 1}.webp`;
  }
}
