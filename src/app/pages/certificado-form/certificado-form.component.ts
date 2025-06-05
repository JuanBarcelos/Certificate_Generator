import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule, type NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.scss'
})
export class CertificadoFormComponent {

  certificate: Certificate = {
    name: '',
    listActivities: []
  }
  activity: string = '';

  invalidFields(field: NgModel) {
    return field.invalid && field.touched
  }
  validForm() {
    return this.certificate.name.length > 0 && this.certificate.listActivities.length > 0
  }
  addActivity() {
    if (this.activity.length > 0) {
      this.certificate.listActivities.push(this.activity)
      this.activity = ''
    }
  }
  removeActivity(index: number) {
    this.certificate.listActivities.splice(index, 1)
  }
  generateCertificate() {
    if (!this.validForm()) {
      alert('Preencha todos os campos')
      return
    }
    console.log(this.certificate)
  }
}
