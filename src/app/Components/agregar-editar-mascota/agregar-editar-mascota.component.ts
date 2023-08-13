import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSuffix } from '@angular/material/form-field';
import { Mascota } from 'src/app/Interface/mascota';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {
form:FormGroup

constructor(private fb : FormBuilder){
  this.form = this.fb.group({
    nombre: ['',Validators.required],
    raza: ['',Validators.required],
    color: ['',Validators.required],
    edad: ['',Validators.required],
    peso: ['',Validators.required],
    })
}

agregarMascota(){
  //const nombre = this.form.get('nombre')?.value
  const mascota : Mascota = {
  Nombre : this.form.value.nombre,
  raza : this.form.value.raza,
  color : this.form.value.color,
  Edad : this.form.value.edad,
  peso : this.form.value.peso,
  }

  console.log(mascota)
}
}
