import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
})
export class TrabajosComponent implements OnInit, AfterViewInit {
  trabajos: { src: string; alt: string; title: string; text: string }[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.trabajos = [
        {
          src: '../../../assets/trabajosImg/img1.jpg',
          alt: 'img1 - Servicio grúa',
          title: 'img1 - Servicio grúa',
          text: 'Proyecto 01',
        },
        {
          src: '../../../assets/trabajosImg/img2.jpg',
          alt: 'img2 - Servicio grúa',
          title: 'img2 - Servicio grúa',
          text: 'Proyecto 02',
        },
        {
          src: '../../../assets/trabajosImg/img3.jpg',
          alt: 'img3 - Servicio grúa',
          title: 'img3 - Servicio grúa',
          text: 'Proyecto 03',
        },
        {
          src: '../../../assets/trabajosImg/img4.jpg',
          alt: 'img4 - Servicio grúa',
          title: 'img4 - Servicio grúa',
          text: 'Proyecto 04',
        },
        {
          src: '../../../assets/trabajosImg/img5.jpg',
          alt: 'img5 - Servicio grúa',
          title: 'img5 - Servicio grúa',
          text: 'Proyecto 05',
        },
        {
          src: '../../../assets/trabajosImg/img6.jpg',
          alt: 'img6 - Servicio grúa',
          title: 'img6 - Servicio grúa',
          text: 'Proyecto 06',
        },
        {
          src: '../../../assets/trabajosImg/img7.jpg',
          alt: 'img7 - Servicio grúa',
          title: 'img7 - Servicio grúa',
          text: 'Proyecto 07',
        },
        {
          src: '../../../assets/trabajosImg/img8.jpg',
          alt: 'img8 - Servicio grúa',
          title: 'img8 - Servicio grúa',
          text: 'Proyecto 08',
        },
        {
          src: '../../../assets/trabajosImg/img9.jpg',
          alt: 'img9 - Servicio grúa',
          title: 'img9 - Servicio grúa',
          text: 'Proyecto 09',
        },
      ];
    }, 1500);
  }
}
