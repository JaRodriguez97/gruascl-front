import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeletonLoader]'
})
export class SkeletonLoaderDirective implements OnInit {
  @Input() appSkeletonLoader: boolean = true;
  @Input() skeletonType: 'text' | 'image' | 'card' = 'text';
  @Input() skeletonLines: number = 1;

  private skeletonElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (this.appSkeletonLoader) {
      this.createSkeleton();
    }
  }

  private createSkeleton() {
    // Ocultar contenido original
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');

    // Crear elemento skeleton
    this.skeletonElement = this.renderer.createElement('div');
    this.renderer.addClass(this.skeletonElement, 'skeleton-loader');
    this.renderer.addClass(this.skeletonElement, `skeleton-${this.skeletonType}`);

    // Configurar según tipo
    switch (this.skeletonType) {
      case 'image':
        this.renderer.setStyle(this.skeletonElement, 'width', '100%');
        this.renderer.setStyle(this.skeletonElement, 'height', '200px');
        break;
      case 'card':
        this.renderer.setStyle(this.skeletonElement, 'width', '100%');
        this.renderer.setStyle(this.skeletonElement, 'height', '300px');
        break;
      case 'text':
        for (let i = 0; i < this.skeletonLines; i++) {
          const line = this.renderer.createElement('div');
          this.renderer.addClass(line, 'skeleton-line');
          this.renderer.appendChild(this.skeletonElement, line);
        }
        break;
    }

    // Insertar antes del elemento original
    this.renderer.insertBefore(
      this.el.nativeElement.parentNode,
      this.skeletonElement,
      this.el.nativeElement
    );

    // Remover skeleton después de un tiempo
    setTimeout(() => {
      this.removeSkeleton();
    }, 800); // 0.8 segundos
  }

  private removeSkeleton() {
    if (this.skeletonElement) {
      this.renderer.removeChild(
        this.el.nativeElement.parentNode,
        this.skeletonElement
      );
      this.skeletonElement = null;
    }
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
  }
}
