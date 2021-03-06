import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seminario } from 'src/app/models/Seminario';

@Injectable({
  providedIn: 'root'
})
export class SeminarioServicesService {

  constructor(private http:HttpClient) {
   }
   private urlpost:string ='https://sigca-upeu.herokuapp.com/api/seminario/all'; 
   getSeminarios(): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(this.urlpost)  
  }
  private urlpostInsertarSeminario:string= 'https://sigca-upeu.herokuapp.com/api/seminario/new';
  insertarSeminario(obj: Seminario) {
    console.log(obj);
    return this.http.post(this.urlpostInsertarSeminario, obj);
  }
  private urlpostBuscarSeminario:string= 'https://sigca-upeu.herokuapp.com/api/seminario/search/'
  buscarSeminarioId(id: number): Observable<Seminario> {
    return this.http.get<Seminario>(`${this.urlpostBuscarSeminario}${id}`);
  }
  private urlputEditarSeminario:string='https://sigca-upeu.herokuapp.com/api/seminario/update/'
  editarSeminario(id: number, obj: Seminario) {
    console.log(obj);
    return this.http.put(`${this.urlputEditarSeminario}${id}`, obj);
  }
 
   
}