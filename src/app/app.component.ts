import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUIComponent } from "./components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUIComponent, CertificadosComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibirNavbar = false;
}
