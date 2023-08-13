import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMascotaComponent } from './Components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './Components/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoMascotaComponent } from './Components/listado-mascota/listado-mascota.component';
//modulos
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotaComponent,
    VerMascotaComponent,
    ListadoMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
