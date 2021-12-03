import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { Progreso } from '../models/Progreso';
import { Seminario } from '../models/Seminario';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlpost:string ='http://localhost:9090/api/pedidooracion/new'; 
  private urlget:string ='http://localhost:9090/api/seminario/socio'; 
  private progres:string ='http://localhost:9090/api/reportes/progreso'; 
  private asistencia:string ='http://localhost:9090/api/asistenciaseminario/actualizar'; 
  constructor(private http: HttpClient, private router: Router) { }
  insertarModulo(obj: Pedido) {
 
    
    return this.http.post(this.urlpost, obj,this.httpOptions) ;
  }
  getSeminarios(id:number): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(`${this.urlget}/${id}`)
  }

  getProgreso(id:number): Observable<Progreso[]>{
    
    return this.http.get<Progreso[]>(`${this.progres}/${id}`)
  
  }

  insertarasistencia(socio:number, seminario:number, valor: number, des:String ) {
 
    return this.http.post(`${this.asistencia}/${socio}/${seminario}/${valor}/${des}`,null) ;
  }

}
