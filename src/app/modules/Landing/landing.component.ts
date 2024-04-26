import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
// import { PublicService } from "@services/Public/public.service";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  sections: string[] = ['Inicio', 'Productos', 'Contactanos'];
  selectedItem: number | null = null;
  activeClassHeader: Boolean = false;
  activeClassNav: Boolean = false;
  public isBrowser!: boolean;
  public isMobile!: boolean;
  productos: [] = [];
  hidden = false;
  faWhatsapp = faWhatsapp;
  // token!: string;

  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('boxBtn') boxBtn!: ElementRef;

  constructor(
    private render: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // public publicService: PublicService
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

    console.log('El dispositivo usado es un celular: ', this.isMobile);
  }

  ngOnInit() {
    // setTimeout(() => this.publicService.hide(), 1000);
    // this.token = localStorage.getItem("tokenCNG")!;
    // if (this.router.url.indexOf("cart") != -1) this.toggleBadgeVisibility();
  }

  @HostListener('window:scroll')
  scrolling(): void {
    // Header
    if (window.scrollY > 0)
      this.render.addClass(this.header.nativeElement, 'sticky');
    else this.render.removeClass(this.header.nativeElement, 'sticky');

    // Botones fijos
    let scroll = this.isMobile ? (window.screen.availHeight * 65) / 100 : 320;
    let scrollHide = this.isMobile
      ? window.document.body.offsetHeight * 9
      : window.document.body.offsetHeight * 5.5;

    if (window.scrollY > scroll && window.scrollY < scrollHide)
      this.render.addClass(this.boxBtn.nativeElement, 'show');
    else this.render.removeClass(this.boxBtn.nativeElement, 'show');
  }

  // toggleBadgeVisibility() {
  //   if (!this.token)
  //     Swal.fire({
  //       title: "Inicia sesión",
  //       text: "Para ver los productos del carrito debes iniciar sesión",
  //       icon: "warning",
  //       confirmButtonText: "Aceptar",
  //       // }).then(() => this.toggleParpadeo());
  //     });
  //   else {
  //     this.hidden = !this.hidden;

  //     if (this.hidden) this.router.navigate(["/landing/cart"]);
  //     else this.router.navigate(["/"]);
  //   }
  // }

  toogleMenu() {
    this.menuToggle?.nativeElement?.classList.toggle('active');
    this.menu?.nativeElement?.classList.toggle('active');
  }

  // onDataLoaded() {
  //   this.progressBar = !this.progressBar;
  // }

  onItemClick(index: number) {
    this.selectedItem = index;
    this.addClass();
  }

  addClass() {
    this.activeClassNav = !this.activeClassNav;
  }
}
