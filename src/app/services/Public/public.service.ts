import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  URL = environment.urlBack + 'contact/';

  public isBrowser!: boolean;
  public isMobile!: boolean;
  public sticky!: boolean;
  public imgIndex!: boolean;
  public imgNosotros!: boolean;
  public show!: boolean;
  public menuToggle!: boolean;
  public menu!: boolean;
  public contactImg!: boolean;
  public servicios!: boolean;
  public trabajos!: boolean;
  public testimonios!: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    // Verifica si la aplicación se está ejecutando en un navegador
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Obtén el agente de usuario del navegador
      //@ts-ignore
      const { userAgentData, userAgent } = window.navigator;

      if (userAgentData) this.isMobile = userAgentData.mobile;
      else if (
        userAgent.match(/Android/i) ||
        userAgent.match(/webOS/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/Windows Phone/i)
      )
        this.isMobile = true;
      else this.isMobile = false;
    }
  }

  headers() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  sendClick(event: string) {
    let headers = this.headers();

    return this.http.post(this.URL + 'click', { event }, { headers });
  }

  // Métodos seguros para SSR
  getWindow(): Window | null {
    return this.isBrowser ? window : null;
  }

  getDocument(): Document | null {
    return this.isBrowser ? document : null;
  }

  getNavigator(): Navigator | null {
    return this.isBrowser ? navigator : null;
  }

  // Método seguro para obtener dimensiones de ventana
  getWindowDimensions(): { scrollY: number; innerHeight: number; innerWidth: number } {
    if (!this.isBrowser) {
      return { scrollY: 0, innerHeight: 0, innerWidth: 0 };
    }
    return {
      scrollY: window.scrollY || 0,
      innerHeight: window.innerHeight || 0,
      innerWidth: window.innerWidth || 0
    };
  }

  // Método seguro para scroll listeners
  isScrollListenerSafe(): boolean {
    return this.isBrowser && typeof window !== 'undefined' && typeof window.scrollY !== 'undefined';
  }

  // Método seguro para localStorage
  setLocalStorage(key: string, value: string): boolean {
    if (this.isBrowser && typeof Storage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        console.warn('LocalStorage no disponible:', e);
        return false;
      }
    }
    return false;
  }

  getLocalStorage(key: string): string | null {
    if (this.isBrowser && typeof Storage !== 'undefined') {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        console.warn('LocalStorage no disponible:', e);
        return null;
      }
    }
    return null;
  }

  // Método seguro para manipular clases del body
  toggleBodyClass(className: string, add: boolean = true): boolean {
    const document = this.getDocument();
    if (document) {
      if (add) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
      return true;
    }
    return false;
  }
}
