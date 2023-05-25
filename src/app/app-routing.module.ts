import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TiposDocumentosComponent } from './components/tipos-documentos/tipos-documentos.component';
import { TiposIdentificacionesComponent } from './components/tipos-identificaciones/tipos-identificaciones.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  //RUTAS DE DATA MAESTRA
  {path:'tiposdocumentos',component:TiposDocumentosComponent},
  {path:'tiposidentificaciones',component:TiposIdentificacionesComponent},
  { path: '',component:HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
