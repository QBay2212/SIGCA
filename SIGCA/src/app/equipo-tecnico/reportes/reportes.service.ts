import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Banco, Distrito, Participacion, Programacion, RecursoSocio, Sede, Sesion } from './reporte';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Modulo } from 'src/app/models/modulo';
import { Categoria } from 'src/app/models/categoria';

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
  private urlbancoComunal:string ='http://localhost:9090/api/bancoComunal/sede';
  private urlmodulo:string = 'http://localhost:9090/api/modulo/categoria';
  private urlcategoria:string = 'http://localhost:9090/api/categoria/all';
  constructor(private http: HttpClient, private router: Router) { }
  getParticipacion(banco:number, modulo:number): Observable<Participacion[]>{
    return this.http.get<Participacion[]>(`${this.urlpost}/participacion/${banco}/${modulo}`)
  }
  getparticipacionrecursosocio(sesion:number, modulo:number): Observable<RecursoSocio[]>{
    return this.http.get<RecursoSocio[]>(`${this.urlpost}/participacionrecursos/${sesion}/${modulo}`)
  }
  getParticipacionSesiones(banco:number, modulo:number,sesion:number): Observable<Participacion[]>{
    return this.http.get<Participacion[]>(`${this.urlpost}/participacion/${banco}/${modulo}/${sesion}`)
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
  getBancoSede(id:number): Observable<Banco[]>{
    return this.http.get<Banco[]>(`${this.urlbancoComunal}/${id}`);  
  }
  getModulo(id:number): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(`${this.urlmodulo}/${id}`);  
  }
  getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlcategoria);
  }

}
