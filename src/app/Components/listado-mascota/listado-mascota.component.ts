import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/Interface/mascota'
import { MascotaService } from 'src/app/Services/mascota.service';

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nombre','Edad','raza','color','peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _snackBar: MatSnackBar, private _mascotaService : MascotaService) {
    
  }
  ngOnInit():void{
    this.ObtenerMascotas();
  }

  ngAfterViewInit(){

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  EliminarMascota(){
    this._snackBar.open('El registro se elimino correctamente','',{
      duration: 4000,
      horizontalPosition : 'center',
    }); 
  }

  ObtenerMascotas(){
    this._mascotaService.getMascotas().subscribe(data =>  {
      this.dataSource.data = data;
    }, error => alert("Ocurrio un error al cargar"));
  }

}
 
