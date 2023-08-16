import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/Interface/mascota';
import { MascotaService } from 'src/app/Services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {
  id : number;
  mascota !: Mascota;

  //mascota$! : Observable<Mascota>  --PIPE ASYNC

  constructor(private _mascotaService : MascotaService,
    private aRout : ActivatedRoute){
     this.id = Number(this.aRout.snapshot.paramMap.get('id'));

  }
  ngOnInit(): void {
    //this.mascota$ = this._mascotaService.getMacotas(this.id)--PIPE ASYNC
    this.obtenerMascota();
    
  }

  obtenerMascota(){
    this._mascotaService.getMacotas(this.id).subscribe(data => {
      this.mascota = data
    })
  }

}
