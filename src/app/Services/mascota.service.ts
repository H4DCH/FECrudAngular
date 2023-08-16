import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Mascota } from '../Interface/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  
  private MyAppUrl : string = environment.endpoint;
  private MyAPIUrl : string = 'api/Mascota/'; 

  constructor(private http : HttpClient) { }

  getMascotas() : Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.MyAppUrl}${this.MyAPIUrl}`);
  }

  getMacotas(id : number) : Observable<Mascota>{
    return this.http.get<Mascota>(`${this.MyAppUrl}${this.MyAPIUrl}${id}`);
  }

  deleteMascota(id : number) : Observable<void>{
    return  this.http.delete<void>(`${this.MyAppUrl}${this.MyAPIUrl}${id}`)

  }

  addMascota(mascota:Mascota) :Observable<Mascota>{
     return this.http.post<Mascota>(`${this.MyAppUrl}${this.MyAPIUrl}`,mascota)

  }

  updateMascota(id : number, mascota : Mascota): Observable<void>{
    return this.http.put<void>(`${this.MyAppUrl}${this.MyAPIUrl}${id}`,mascota);

  }
}
