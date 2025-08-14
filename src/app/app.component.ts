import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  constructor(
    private meta: Meta,
    private publicService: PublicService
  ) {
    this.meta.updateTag({
      property: 'article:modified_time',
      content: environment.deploymentTime,
    });
  }

  ngOnInit(): void {
    // Optimización para LCP - sin transiciones iniciales (SSR-safe)
    this.publicService.toggleBodyClass('loaded', false);
  }

  ngAfterViewInit(): void {
    // Activar transiciones después de la carga inicial para mejorar LCP (SSR-safe)
    setTimeout(() => {
      this.publicService.toggleBodyClass('loaded', true);
    }, 100);
  }
}
