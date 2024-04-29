import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  { path: '**', component: NotFoundComponent },
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
