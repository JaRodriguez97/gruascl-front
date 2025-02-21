import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private meta: Meta) {
    this.meta.updateTag({
      property: 'article:modified_time',
      content: environment.deploymentTime,
    });
  }
}
