import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Banco, Distrito, Participacion, Programacion, Sede, Sesion } from './reporte';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private urlpost:string ='http://localhost:9090/api/reportes'; 
  private urlsede:string ='http://localhost:9090/api/sede'; 
  private urldistrito:string ='http://localhost:9090/api/distrito'; 
  private urlbanco:string ='http://localhost:9090/api/bancoComunal'; 
  private urlprogramacion:string ='http://localhost:9090/api/programacion'; 
  private urlsesion:string ='http://localhost:9090/api/sesion'; 
  constructor(private http: HttpClient, private router: Router) { }
  getParticipacion(banco:number, modulo:number): Observable<Participacion[]>{
    return this.http.get<Participacion[]>(`${this.urlpost}/participacion/${banco}/${modulo}`)
  }
  getParticipantes(banco:number, modulo:number): Observable<Participacion[]>{
    return this.http.get<Participacion[]>(`${this.urlpost}/participantes/${banco}/${modulo}`)
  }
  getSede(): Observable<Sede[]>{
    return this.http.get<Sede[]>(this.urlsede + '/all');  
  }
  getDistrtio(id:number): Observable<Distrito[]>{
    return this.http.get<Distrito[]>(`${this.urldistrito}/sede/${id}`);  
  }
  getBanco(id:number): Observable<Banco[]>{
    return this.http.get<Banco[]>(`${this.urlbanco}/distrito/${id}`);  
  }
  getProgramacion(id:number): Observable<Programacion[]>{
    return this.http.get<Programacion[]>(`${this.urlprogramacion}/banco/${id}`);  
  }
  getSesion(id:number): Observable<Sesion[]>{
    return this.http.get<Sesion[]>(`${this.urlsesion}/modulo/${id}`);  
  }
}
