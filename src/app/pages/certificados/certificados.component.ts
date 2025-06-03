import { Component } from '@angular/core';

import { ItemCertificadoComponent } from "../../components/item-certificado/item-certificado.component";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {

}
