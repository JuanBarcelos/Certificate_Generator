import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

export const routes: Routes = [
  {
    path: '',
    component: CertificadosComponent
  },
  {
    path: 'certificado/:id',
    component: CertificadoComponent
  },
  {
    path:'new/certificado',
    component: CertificadoFormComponent
  }
];
