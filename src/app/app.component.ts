import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  constructor(private meta: Meta) {
    this.meta.updateTag({
      property: 'article:modified_time',
      content: environment.deploymentTime,
    });
  }

  ngOnInit(): void {
    // Optimización para LCP - sin transiciones iniciales
    document.body.classList.remove('loaded');
  }

  ngAfterViewInit(): void {
    // Activar transiciones después de la carga inicial para mejorar LCP
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
  }
}
