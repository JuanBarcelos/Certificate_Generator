import { Component } from '@angular/core';

import { ItemCertificadoComponent } from "../../components/item-certificado/item-certificado.component";
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {

}
