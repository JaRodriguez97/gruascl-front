import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'servicio-grua-cali-economicas-24-horas',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
    title: 'Servicio Grúa Cali Economicas 24 Horas - Grúas CL',
  },
  {
    path: '**',
    redirectTo: 'servicio-grua-cali-economicas-24-horas',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
