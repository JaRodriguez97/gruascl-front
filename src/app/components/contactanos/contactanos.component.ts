import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { PublicService } from "@app/services/Public/public.service";
import { ContactService } from '@services/Contact/contact.service';
import Swal from 'sweetalert2';
import {
  faPhone,
  faMapMarked,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css'],
})
export class ContactanosComponent implements OnInit {
  contactForm!: FormGroup;
  faPhone = faPhone;
  faMapMarked = faMapMarked;
  faEnvelope = faEnvelope;
  textButton: string = 'Enviar';

  constructor(
    private contactService: ContactService,
    private router: Router,
    // private publicService: PublicService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  async sendContactMail(form: FormGroup): Promise<any> {
    // this.publicService.show();

    if (this.textButton == 'Cargando...')
      return Swal.fire({
        icon: 'warning',
        html: '<span>Por favor espere que se envie el anterior mensaje</span>',
        scrollbarPadding: false,
      });

    this.textButton = 'Cargando...';

    let { value } = form;

    let { nombreCompleto, email, mensaje } = value;

    if (!nombreCompleto || !email || !mensaje)
      return Swal.fire({
        icon: 'warning',
        html: '<span>Por favor diligencie los campos obligatorios para poder enviar el mensaje</span>',
        scrollbarPadding: false,
      }).then(() => (this.textButton = 'Enviar'));
    // .then(() => this.publicService.hide());

    this.contactService.sendMesage(value).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: res.message,
          html: '<span>Prontamente un operador le contactará</span>',
          // scrollbarPadding: false,
        }).then(() => form.reset());
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al enviar el correo',
          html: `
          <style>
            .a {
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 10px auto;
              font-size: 1.5em;
            }

            .wh {
              color: green;
            }
            .gm {
              color: red;
            }
          </style>
          <a href="https://wa.me/573135804298" class="a wh" target="_blank">
            Intentar por WhatsApp <small>(313 580 42 98)</small>
          </a>
          <a
            href="mailto:gruascl247@gmail.com"
            class="a gm"
            target="_blank"
          >
            Usar app email
          </a>
          `,
        }).then(() => (this.textButton = 'Enviar'));
      },
      complete: () => (this.textButton = 'Enviar'),
    });
  }
}
