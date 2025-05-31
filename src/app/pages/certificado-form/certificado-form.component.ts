import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.scss'
})
export class CertificadoFormComponent {

}
