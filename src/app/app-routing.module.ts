import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'servicio-grua-cali-economicas-24-horas',
    pathMatch: 'full',
  },
  {
    path: 'servicio-grua-cali-economicas-24-horas',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
    title: 'Servicio Grúa Cali Economicas 24 Horas - Grúas CL',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
    title: 'Servicio Grúa Cali Economicas 24 Horas - Grúas CL',
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
