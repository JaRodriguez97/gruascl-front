import { Directive, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { PublicService } from '@services/Public/public.service';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() appScrollAnimation: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' | 'none' = 'fadeInUp';
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 600;
  @Input() enableLazySection: boolean = false; // Nuevo: habilitar lazy loading de secciones
  @Input() sectionName: string = ''; // Nuevo: nombre de la sección para el PublicService
  @Output() sectionVisible = new EventEmitter<string>(); // Nuevo: emitir cuando la sección sea visible

  private observer!: IntersectionObserver;
  private hasTriggered: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private publicService: PublicService
  ) {}

  ngOnInit() {
    // Solo ejecutar en el navegador
    if (!this.publicService.isBrowser) {
      // En SSR, NO activar lazy sections - mantener lazy loading
      return;
    }

    this.setupInitialState();
    this.createObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupInitialState() {
    // Solo configurar animaciones si no es 'none'
    if (this.appScrollAnimation !== 'none') {
      // Agregar clase base para animaciones
      this.renderer.addClass(this.el.nativeElement, 'scroll-animation');
      this.renderer.addClass(this.el.nativeElement, `scroll-${this.appScrollAnimation}`);
      this.renderer.addClass(this.el.nativeElement, 'scroll-hidden');
      
      // Configurar duración y delay
      this.renderer.setStyle(
        this.el.nativeElement, 
        'animation-duration', 
        `${this.animationDuration}ms`
      );
      
      if (this.animationDelay > 0) {
        this.renderer.setStyle(
          this.el.nativeElement, 
          'animation-delay', 
          `${this.animationDelay}ms`
        );
      }
    }
  }

  private createObserver() {
    const options = {
      root: null,
      rootMargin: this.enableLazySection ? '0px 0px -100px 0px' : '0px 0px -50px 0px',
      threshold: this.enableLazySection ? 0.05 : 0.1 // Threshold más bajo para lazy sections
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasTriggered) {
          this.hasTriggered = true;

          // Si es lazy section, activar la sección en PublicService
          if (this.enableLazySection && this.sectionName) {
            this.activateLazySection();
          }

          // Si tiene animación, activarla
          if (this.appScrollAnimation !== 'none') {
            this.renderer.removeClass(this.el.nativeElement, 'scroll-hidden');
            this.renderer.addClass(this.el.nativeElement, 'scroll-visible');
          }
          
          // Desconectar observer después de activar (solo una vez)
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private activateLazySection() {
    if (!this.sectionName) return;

    // Activar la sección correspondiente en PublicService
    switch (this.sectionName) {
      case 'servicios':
        this.publicService.servicios = true;
        break;
      case 'trabajos':
        this.publicService.trabajos = true;
        break;
      case 'testimonios':
        this.publicService.testimonios = true;
        break;
      case 'contactImg':
        this.publicService.contactImg = true;
        break;
    }

    // Emitir evento
    this.sectionVisible.emit(this.sectionName);
  }

  // Método público para forzar la activación (útil para el menú)
  public forceTrigger(): void {
    if (!this.hasTriggered && this.enableLazySection && this.sectionName) {
      this.hasTriggered = true;
      this.activateLazySection();
    }
  }
}
