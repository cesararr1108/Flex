import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { CargaScriptsService } from './services/carga-scripts.service';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LocalStoreServiceService } from './services/local-store-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TiposDocumentosComponent } from './components/tipos-documentos/tipos-documentos.component';
import { TiposTercerosComponent } from './components/tipos-terceros/tipos-terceros.component';
import { TiposIdentificacionesComponent } from './components/tipos-identificaciones/tipos-identificaciones.component';
import { CondicionesPagoComponent } from './components/condiciones-pago/condiciones-pago.component';
import { ConceptosDocumentosComponent } from './components/conceptos-documentos/conceptos-documentos.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { TercerosComponent } from './components/terceros/terceros.component';
import { TercerosDireccionesComponent } from './components/terceros-direcciones/terceros-direcciones.component';
import { TercerosZonasComponent } from './components/terceros-zonas/terceros-zonas.component';
import { TercerosContactosComponent } from './components/terceros-contactos/terceros-contactos.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { RegimenesComponent } from './components/regimenes/regimenes.component';
import { IvasComponent } from './components/ivas/ivas.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { MediosPagosComponent } from './components/medios-pagos/medios-pagos.component';
import { DatosFiscalesComponent } from './components/datos-fiscales/datos-fiscales.component';
import { ZonaVentasComponent } from './components/zona-ventas/zona-ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    TiposDocumentosComponent,
    TiposTercerosComponent,
    TiposIdentificacionesComponent,
    CondicionesPagoComponent,
    ConceptosDocumentosComponent,
    MaterialesComponent,
    TercerosComponent,
    TercerosDireccionesComponent,
    TercerosZonasComponent,
    TercerosContactosComponent,
    AlmacenesComponent,
    RegimenesComponent,
    IvasComponent,
    BancosComponent,
    MediosPagosComponent,
    DatosFiscalesComponent,
    ZonaVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CargaScriptsService,
    LocalStoreServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
