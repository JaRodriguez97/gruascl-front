import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactanosComponent } from '@components/contactanos/contactanos.component';
import { HeaderComponent } from '@components/header/header.component';
import { IndexComponent } from '@components/index/index.component';
import { NosotrosComponent } from '@components/nosotros/nosotros.component';
import { ServiciosComponent } from '@components/servicios/servicios.component';
import { TestimoniosComponent } from '@components/testimonios/testimonios.component';
import { TrabajosComponent } from '@components/trabajos/trabajos.component';
import { LazyLoadingDirective } from '@directives/lazy-loading.directive';
import { ScrollAnimationDirective } from '@directives/scroll-animation.directive';
import { SkeletonLoaderDirective } from '@directives/skeleton-loader.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent,
    ContactanosComponent,
    IndexComponent,
    NosotrosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    TrabajosComponent,
    LazyLoadingDirective,
    ScrollAnimationDirective,
    SkeletonLoaderDirective,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LandingRoutingModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingModule {}
