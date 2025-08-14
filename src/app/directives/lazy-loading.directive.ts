import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoading]'
})
export class LazyLoadingDirective implements OnInit, OnDestroy {
  @Input() appLazyLoading = '';
  @Input() srcset = '';
  @Input() sizes = '';
  @Input() placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkNhcmdhbmRvLi4uPC90ZXh0Pjwvc3ZnPg==';
  
  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initLazyLoading();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      this.setupIntersectionObserver();
    } else {
      // Fallback para navegadores más antiguos
      this.loadImage();
    }
  }

  private setupIntersectionObserver(): void {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '50px', // Cargar imagen 50px antes de que sea visible
      threshold: 0.01
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
    
    // Establecer placeholder mientras tanto
    this.setPlaceholder();
  }

  private setPlaceholder(): void {
    const img = this.elementRef.nativeElement;
    if (!img.src || img.src === '') {
      this.renderer.setAttribute(img, 'src', this.placeholder);
      this.renderer.addClass(img, 'lazy-loading');
    }
  }

  private loadImage(): void {
    const img = this.elementRef.nativeElement;
    const imageUrl = this.appLazyLoading || img.getAttribute('data-src');
    console.log("🚀 ~ LazyLoadingDirective ~ loadImage ~ imageUrl:", imageUrl)
    
    if (imageUrl) {
      // Crear nueva imagen para precargar
      const imageLoader = new Image();
      
      imageLoader.onload = () => {
        // Configurar src principal
        this.renderer.setAttribute(img, 'src', imageUrl);
        
        // Configurar srcset si está disponible
        if (this.srcset) {
          this.renderer.setAttribute(img, 'srcset', this.srcset);
        }
        
        // Configurar sizes si está disponible
        if (this.sizes) {
          this.renderer.setAttribute(img, 'sizes', this.sizes);
        }
        
        this.renderer.removeClass(img, 'lazy-loading');
        this.renderer.addClass(img, 'lazy-loaded');
        
        // Añadir animación suave
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
        
        setTimeout(() => {
          img.style.opacity = '1';
        }, 10);
      };

      imageLoader.onerror = () => {
        this.renderer.removeClass(img, 'lazy-loading');
        this.renderer.addClass(img, 'lazy-error');
      };

      // Si hay srcset, configurarlo en el imageLoader también
      if (this.srcset) {
        imageLoader.srcset = this.srcset;
      }
      if (this.sizes) {
        imageLoader.sizes = this.sizes;
      }
      
      imageLoader.src = imageUrl;
    }
  }
}
