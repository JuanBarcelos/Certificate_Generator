import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SecondaryButtonComponent } from "../../components/secondary-button/secondary-button.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent implements OnInit {
  certificate: Certificate | undefined;
  @ViewChild('certificateContainer') certificateElement!: ElementRef;
  constructor(private router: ActivatedRoute, private certificateService: CertificateService, private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.certificate = this.certificateService.getCertificateById(id);
    });
  }

  downloadCertificate() {
    if (!this.certificate) {
      console.error('Certificado não encontrado.');
      return;
    }
    html2canvas(this.certificateElement.nativeElement, {scale: 2}).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'certificado_'+this.certificate?.name.replaceAll(' ','_')+'.png';
      link.click();
    });
  }

  goBack() {
    this.route.navigate(['new/certificado']);
  }
}
