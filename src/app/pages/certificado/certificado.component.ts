import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { ActivatedRoute } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import type { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent implements OnInit {
  certificate: Certificate | undefined;
  constructor(private router: ActivatedRoute, private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.certificate = this.certificateService.getCertificateById(id);
      console.log(this.certificate);
    });
  }
}
