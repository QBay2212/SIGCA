import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlpost:string ='http://localhost:9090/api/pedidooracion/new'; 
  constructor(private http: HttpClient, private router: Router) { }
  insertarModulo(obj: Pedido) {
 
    
    return this.http.post(this.urlpost, obj,this.httpOptions) ;
  }
}
