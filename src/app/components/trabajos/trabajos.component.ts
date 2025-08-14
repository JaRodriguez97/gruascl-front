import { Component } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent {
  trabajos: { alt: string; title: string; text: string }[] = [
    {
      alt: 'img1 - Servicio grúa',
      title: 'img1 - Servicio grúa',
      text: 'Proyecto 01',
    },
    {
      alt: 'img2 - Servicio grúa',
      title: 'img2 - Servicio grúa',
      text: 'Proyecto 02',
    },
    {
      alt: 'img3 - Servicio grúa',
      title: 'img3 - Servicio grúa',
      text: 'Proyecto 03',
    },
    {
      alt: 'img4 - Servicio grúa',
      title: 'img4 - Servicio grúa',
      text: 'Proyecto 04',
    },
    {
      alt: 'img5 - Servicio grúa',
      title: 'img5 - Servicio grúa',
      text: 'Proyecto 05',
    },
    {
      alt: 'img6 - Servicio grúa',
      title: 'img6 - Servicio grúa',
      text: 'Proyecto 06',
    },
    {
      alt: 'img7 - Servicio grúa',
      title: 'img7 - Servicio grúa',
      text: 'Proyecto 07',
    },
    {
      alt: 'img8 - Servicio grúa',
      title: 'img8 - Servicio grúa',
      text: 'Proyecto 08',
    },
    {
      alt: 'img9 - Servicio grúa',
      title: 'img9 - Servicio grúa',
      text: 'Proyecto 09',
    },
  ];
  btnVisibillity: boolean = true;

  constructor(public publicService: PublicService) {}

  onPushImage() {
    this.trabajos.push(
      {
        alt: 'img10 - Servicio grúa',
        title: 'img10 - Servicio grúa',
        text: 'Proyecto 10',
      },
      {
        alt: 'img11 - Servicio grúa',
        title: 'img11 - Servicio grúa',
        text: 'Proyecto 11',
      },
      {
        alt: 'img12 - Servicio grúa',
        title: 'img12 - Servicio grúa',
        text: 'Proyecto 12',
      },
      {
        alt: 'img13 - Servicio grúa',
        title: 'img13 - Servicio grúa',
        text: 'Proyecto 13',
      },
      {
        alt: 'img14 - Servicio grúa',
        title: 'img14 - Servicio grúa',
        text: 'Proyecto 14',
      },
      {
        alt: 'img15 - Servicio grúa',
        title: 'img15 - Servicio grúa',
        text: 'Proyecto 15',
      },
      {
        alt: 'img16 - Servicio grúa',
        title: 'img16 - Servicio grúa',
        text: 'Proyecto 16',
      }
    );

    this.btnVisibillity = false;
  }

  setSrc(i: number) {
    return `https://gruascl.com/assets/trabajosImg/img${i + 1}.webp`;
  }
}
