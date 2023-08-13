import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { ListadoMascotaComponent } from './Components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './Components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './Components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  {path : '', redirectTo :'ListadoMascota', pathMatch: 'full' },
  {path:'ListadoMascota',component : ListadoMascotaComponent},
  {path : 'AgregarEditarMascota', component:AgregarEditarMascotaComponent},
  {path : 'VerMascota/:id', component:VerMascotaComponent},
  {path : 'EditarMascota/:id', component:AgregarEditarMascotaComponent},
  {path:'**', redirectTo :'ListadoMascota', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
