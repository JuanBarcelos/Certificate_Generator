import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BaseUIComponent } from "./components/base-ui/base-ui.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUIComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerador-certificado';
  exibirNavbar = false;
}
