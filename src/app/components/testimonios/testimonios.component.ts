import { Component } from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css'],
})
export class TestimoniosComponent {
  testimonios: { parrafo: string; nombre: string; profesion: string }[] = [
    {
      parrafo:
        'Desde el momento en que llamé a su línea para emergencia, hasta que mi vehículo fue entregado al taller, quedé por la rapidez y profesionalismo demostrado por el equipo <span>Grúas CL.</span> Su respuesta fue inmediata, y en de minutos, la grúa llegó al lugar del incidente.',
      nombre: 'Juan Ramírez',
      profesion: 'Empresario',
    },
    {
      parrafo:
        'El equipo <span>Grúas CL</span> llegó al lugar en cuestión de minutos, equipado con la grúa adecuada para nuestro vehículo de carga pesada. Lo que más me impresionó fue su capacidad para coordinar el rescate, manteniendo la seguridad de todos los involucrados y minimizando cualquier riesgo además de lo económicas.',
      nombre: 'María López',
      profesion: 'Directora Contable',
    },
    {
      parrafo:
        '<span>Grùas CL</span> es simplemente fenomenal. Mi camión se averió en medio de una entrega urgente, y su equipo al rescate sin demora. Su profesionalismo y eficiencia hicieron toda la diferencia. ¡Recomiendo encarecidamente sus servicios a todos los conductores!',
      nombre: 'Sofía García',
      profesion: 'Ingeniera Industrial',
    },
  ];

  constructor(public publicService: PublicService) {}
}
