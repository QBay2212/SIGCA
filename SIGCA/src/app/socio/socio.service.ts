import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
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
  constructor(private http: HttpClient, private router: Router) { }
  insertarModulo(obj: Pedido) {
 
    
    return this.http.post(this.urlpost, obj,this.httpOptions) ;
  }
  getSeminarios(id:number): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(`${this.urlget}/${id}`)
  }

}
