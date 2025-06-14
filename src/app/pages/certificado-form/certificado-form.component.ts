import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule, type NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../services/certificate.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.scss'
})
export class CertificadoFormComponent {
  @ViewChild('certificateForm') certificateForm !: NgModel;

  constructor(private certificateService: CertificateService, private route: Router) { }

  certificate: Certificate = {
    id: '',
    name: '',
    listActivities: [],
    date: new Date().toLocaleDateString('pt-BR'),
  }
  activity: string = '';

  invalidFields(field: NgModel) {
    return field.invalid && field.touched
  }
  validForm() {
    //return this.certificateForm.valid
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
    this.certificate.id = uuidv4();
    this.certificateService.addCertificate(this.certificate);
    this.route.navigate(['/certificado', this.certificate.id]);
    //this.clearCertificateForm();
    //this.certificateForm.reset();
  }

  clearCertificateForm() {
    this.certificate = {
      id: '',
      name: '',
      listActivities: [],
      date: new Date().toLocaleDateString('pt-BR'),
    }

  }
}
