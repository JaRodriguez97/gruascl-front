import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grua-cali',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
    title: 'Servicio Grúa Cali Economicas 24 Horas - Grúas CL',
  },
  {
    path: '**',
    redirectTo: 'grua-cali',
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
