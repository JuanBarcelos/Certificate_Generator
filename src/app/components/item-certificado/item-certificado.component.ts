import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.scss'
})
export class ItemCertificadoComponent {

  id: String = '2'
  constructor( private router: Router ) { }
  goToCertificado() {
    this.router.navigate(['/certificado/', this.id]);
  }
}
