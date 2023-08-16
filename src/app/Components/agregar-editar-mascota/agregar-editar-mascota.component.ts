import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/Interface/mascota';
import { MascotaService } from 'src/app/Services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {
form:FormGroup
id : number
operacion : string = "Agregar";

constructor(private fb : FormBuilder,private mascotaservice : MascotaService,private _snackBar: MatSnackBar
  ,private _router : Router , private aRoute : ActivatedRoute){
  this.form = this.fb.group({
    nombre: ['',Validators.required],
    raza: ['',Validators.required],
    color: ['',Validators.required],
    edad: ['',Validators.required],
    peso: ['',Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
 }

 ngOnInit():void{
    if(this.id !=0){
      this.operacion = "Editar"
      this.obtenerMascota(this.id);
    }
 }
 obtenerMascota(id:number){
  this.mascotaservice.getMacotas(id).subscribe(data =>
    this.form.setValue({
      nombre : data.nombre,
      raza : data.raza,
      edad : data.edad,
      color : data.color,
      peso : data.peso  
    })
 )}

 agregarEditarMascota(): void{
  //const nombre = this.form.get('nombre')?.value
  const mascota : Mascota = {
  nombre : this.form.value.nombre,
  raza : this.form.value.raza,
  color : this.form.value.color,
  edad : this.form.value.edad,
  peso : this.form.value.peso,
  }
  if(this.id !=0){
    mascota.id = this.id;
      this.editarMascota(this.id,mascota);
  }else{
    this.agregarMascota(mascota);
  }
}

editarMascota(id : number , mascota: Mascota){
  this.mascotaservice.updateMascota(id,mascota).subscribe(() =>{
    this.mensajeExito("actualizado");
    this._router.navigate(['/ListadoMascota']);

  })
}
agregarMascota(mascota : Mascota){
//Se envia objeto al back
this.mascotaservice.addMascota(mascota).subscribe(data =>{
  this.mensajeExito("agregado");
  this._router.navigate(['/ListadoMascota']);
  
  });
}
mensajeExito(texto : string){
  this._snackBar.open(`El registro fue ${texto} correctamente`,'',{
    duration: 4000,
    horizontalPosition : 'center',
  });
}
}
