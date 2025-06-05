import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUIComponent } from "./components/base-ui/base-ui.component";
import { CertificateService } from './services/certificate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUIComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  exibirNavbar = false;

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    const certificates = this.certificateService.getCertificates();
    this.certificateService.certificates = certificates;
  }
}
