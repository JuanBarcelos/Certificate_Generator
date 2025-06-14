import { Injectable } from '@angular/core';
import type { Certificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: Certificate[] = [];
  constructor() { }

  getCertificates(): Certificate[] {
    if (localStorage.getItem('certificates')) {
      this.certificates = JSON.parse(localStorage.getItem('certificates')!);
    }
    return this.certificates;
  }
  getCertificateById(id: string): Certificate {
    return this.certificates.find(certificate => certificate.id === id)!;
  }
  addCertificate(certificate: Certificate): void {
    this.certificates.unshift({...certificate});
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
