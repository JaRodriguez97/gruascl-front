import { Component } from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {
  servicios: {
    alt: string;
    title: string;
    titulo: string;
    parrafo: string;
  }[] = [
    {
      alt: 'Grua para carros Cali - Servicio de grua economico vehiculos livianos',
      title: 'Gruas Cali vehiculos livianos - Servicio grua economico',
      titulo: 'Grua para Carros - Vehículos Livianos',
      parrafo:
        'Nuestro <strong>servicio de grua para carros</strong> en Cali incluye vehículos livianos con <strong>grua economica</strong> disponible 24 horas. Atención rápida y precios competitivos.',
    },
    {
      alt: 'Grua 24 horas Cali vehiculos medianos - Servicio de grua cerca',
      title: 'Gruas Cali 24 horas vehiculos medianos - Atencion inmediata',
      titulo: 'Grua 24 Horas - Vehículos Medianos',
      parrafo:
        'Con <strong>grua 24 horas Cali</strong> atendemos vehículos medianos con técnicos especializados. <strong>Servicio de grua cerca</strong> con la experiencia que solo <span>Grúas CL</span> puede ofrecer.',
    },
    {
      alt: 'Traslado vehiculos Cali pesados - Gruas Cali camiones gran tonelaje',
      title: 'Servicio grua Cali vehiculos pesados - Traslado especializado',
      titulo: 'Traslado de Vehículos Pesados',
      parrafo:
        '<strong>Traslado vehiculos Cali</strong> pesados con <strong>gruas Cali</strong> especializadas. Líderes en <strong>servicio de grua</strong> para camiones y vehículos de gran tonelaje.',
    },
    {
      alt: 'Grua para maquinaria pesada Cali - Traslado vehiculos equipos industriales',
      title:
        'Gruas Cali maquinaria pesada - Grua economica equipos industriales',
      titulo: 'Grua para Maquinaria Pesada',
      parrafo:
        '<strong>Traslado vehiculos Cali</strong> especializados en maquinaria pesada. En <span>Grúas CL</span> aseguramos transporte seguro con <strong>grua economica Cali</strong> para equipos industriales.',
    },
    {
      alt: 'Grua telescopica Cali alturas - Servicio grua construccion montajes industriales',
      title:
        'Gruas Cali telescopica trabajos altura - Servicio grua economico construccion',
      titulo: 'Grua Telescópica - Alturas',
      parrafo:
        '<strong>Gruas Cali</strong> especializadas en trabajos de altura con grúa telescópica. <strong>Servicio de grua</strong> económico para construcción y montajes industriales.',
    },
    {
      alt: 'Grua urgente Cali rescate vehicular - Servicio grua cerca emergencias 24 horas',
      title:
        'Rescate vehicular urgente Cali - Grua urgente emergencias 24 horas',
      titulo: 'Rescate Vehicular Urgente',
      parrafo:
        '<strong>Grua urgente Cali</strong> para situaciones de emergencia. <strong>Servicio de grua cerca</strong> con profesionales especializados en <strong>rescate vehicular</strong> las 24 horas.',
    },
  ];

  constructor(public publicService: PublicService) {}

  setSrc(i: number) {
    return `https://gruascl.com/assets/servicioImg/servicio0${i + 1}.webp`;
  }
}
