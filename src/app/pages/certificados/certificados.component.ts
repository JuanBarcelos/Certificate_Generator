import { Component, OnInit } from '@angular/core';

import { ItemCertificadoComponent } from "../../components/item-certificado/item-certificado.component";
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { CertificateService } from '../../services/certificate.service';
import type { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent implements OnInit {

  constructor(private certificadoService: CertificateService) { }
  certificates : Certificate[] = [];

  ngOnInit(): void {
    this.certificates = this.certificadoService.getCertificates();
    console.log(this.certificates);
  }

}
