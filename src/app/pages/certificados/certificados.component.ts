import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from "../../components/item-certificado/item-certificado.component";

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButtonComponent, ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {

}
