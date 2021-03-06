import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Banco, Distrito, Participacion, Programacion, RecursoSocio, Sede, Sesion, Socio } from './reporte';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Modulo } from 'src/app/models/modulo';
import { Categoria } from 'src/app/models/categoria';
import { Seminario } from 'src/app/models/Seminario';
import { ProgresoSeminario } from 'src/app/models/ProgresoSeminario';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private urlpost:string ='https://sigca-upeu.herokuapp.com/api/reportes'; 
  private urlsede:string ='https://sigca-upeu.herokuapp.com/api/sede'; 
  private urldistrito:string ='https://sigca-upeu.herokuapp.com/api/distrito'; 
  private urlbanco:string ='https://sigca-upeu.herokuapp.com/api/bancoComunal'; 
  private urlprogramacion:string ='https://sigca-upeu.herokuapp.com/api/programacion'; 
  private urlsesion:string ='https://sigca-upeu.herokuapp.com/api/sesion'; 
  private urlbancoComunal:string ='https://sigca-upeu.herokuapp.com/api/bancoComunal/sede';
  private urlmodulo:string = 'https://sigca-upeu.herokuapp.com/api/modulo/categoria';
  private urlcategoria:string = 'https://sigca-upeu.herokuapp.com/api/categoria/all';
  private urldesarrollodis:string = 'https://sigca-upeu.herokuapp.com/api/reportes/desarrollodistrito';
  private urldesarrolloban:string = 'https://sigca-upeu.herokuapp.com/api/reportes/desarrollobanco';
  private urlprogresoseminario:string = 'https://sigca-upeu.herokuapp.com/api/reportes/seminarios';
  private urlprogresoseminariobanco:string = 'https://sigca-upeu.herokuapp.com/api/reportes/seminariosbanco';
  private urlseminario:string = 'https://sigca-upeu.herokuapp.com/api/seminario';
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
  insertarMasivo(modulo:String, banco:String): Observable<String>{
    return this.http.post<String>(`${this.urlpost}/insertar/${modulo}/${banco}`,null)
  }
  listarSocios(id:number): Observable<Socio[]>{
    return this.http.get<Socio[]>(`${this.urlpost}/socios/${id}`);
  }
  DesarrolloDistrito(id:number): Observable<Socio[]>{
    return this.http.get<Socio[]>(`${this.urldesarrollodis}/${id}`);
  }
  DesarrolloBanco(id:number): Observable<Socio[]>{
    return this.http.get<Socio[]>(`${this.urldesarrolloban}/${id}`);
  }
  getSeminarios(fecha:String): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(`${this.urlseminario}/fecha/${fecha}`);
  }

  getProgresoSeminario(distrito:number, seminario:number): Observable<ProgresoSeminario[]>{
    return this.http.get<ProgresoSeminario[]>(`${this.urlprogresoseminario}/${distrito}/${seminario}`)
  }

}
