import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicios: {
    src: string;
    alt: string;
    title: string;
    titulo: string;
    parrafo: string;
  }[] = [];

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll')
  scrolling(): void {
    let multiplicador = window.innerWidth < 500 ? 1.2 : 1.5;

    if (window.scrollY >= window.innerHeight * multiplicador) {
      this.servicios = [
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio01.webp',
          alt: 'servicio01 - Servicio grúa',
          title: 'servicio01 - Servicio grúa',
          titulo: 'Servicios Livianos',
          parrafo:
            'Disponemos maquinaria de calidad y ofrecemos los precios más competitivos para brindar una asistencia y eficiente en todos los servicios solicitados.',
        },
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio02.webp',
          alt: 'servicio02 - Servicio grúa',
          title: 'servicio02 - Servicio grúa',
          titulo: 'Servicios medianos',
          parrafo:
            'Nuestros técnicos altamente capacitados y cualificados están disponibles para proporcionarte la experiencia en y que solo <span>Grúas CL.</span> puede ofrecer.',
        },
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio03.jpg',
          alt: 'servicio03 - Servicio grúa',
          title: 'servicio03 - Servicio grúa',
          titulo: 'Servicios grandes',
          parrafo:
            'Nuestra posición líder en el mercado se debe a nuestra constante responsabilidad y compromiso con la satisfacción de nuestros clientes.',
        },
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio04.jpg',
          alt: 'servicio04 - Servicio grúa',
          title: 'servicio04 - Servicio grúa',
          titulo: 'Servicio para maquinaria',
          parrafo:
            'Somos aliados de tu tiempo y tú economía. En <span>Grúas CL</span>, aseguramos el transporte para su maquinaria contratiempos. Logrando tiempos en entrega increibles además del gran servicio con maquinas pesadas.',
        },
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio05.jpg',
          alt: 'servicio05 - Servicio grúa',
          title: 'servicio05 - Servicio grúa',
          titulo: 'Servicio grúa telescópica',
          parrafo:
            'Disponemos con una extensa variedad de maquinaria económica a tu disposición, lista para ofrecerte soluciones y precisas que se adapten a tus necesidades específicas.',
        },
        {
          src: 'https://gruascl.com/assets/servicioImg/servicio06.jpg',
          alt: 'servicio06 - Servicio grúa',
          title: 'servicio06 - Servicio grúa',
          titulo: 'Servicio rescate',
          parrafo:
            'En nuestro equipo, contamos con profesionales altamente capacitados y la maquinaria especializada necesaria para abordar con éxito cualquier situación de rescate que se presente.',
        },
      ];
    }
  }
}
