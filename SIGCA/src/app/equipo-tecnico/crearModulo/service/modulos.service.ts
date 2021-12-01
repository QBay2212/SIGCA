import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { Modulo } from 'src/app/models/modulo';
import { Sesion } from 'src/app/models/sesion';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ModulosService {
  private urlmodulo: string = 'http://localhost:9090/api/modulo';
  private urlcategoria: string = 'http://localhost:9090/api/categoria';
  private urlSesionesDelModulo: string =
    'http://localhost:9090/api/sesion/modulo';
  private urlRecursoSesion: string =
    'http://localhost:9090/api/recursos/sesion/';

  private urlInsertarModulo: string = 'http://localhost:9090/api/modulo/new';
  private urlEliminarModulo: string =
    'http://localhost:9090/api/modulo/delete/';

  private urlBuscarModulo: string = 'http://localhost:9090/api/modulo/search/';
  private urlUpdateModulo: string = 'http://localhost:9090/api/modulo/update/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getModulo(): Observable<Modulo[]> {
    return this.http.get<Modulo[]>(this.urlmodulo + '/all');
  }

  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlcategoria + '/all');
  }

  getSesionModulo(id: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(`${this.urlSesionesDelModulo}/${id}`);
  }

  getRecursoSesion(id: number): Observable<[]> {
    return this.http.get<[]>(`${this.urlRecursoSesion}${id}`);
  }

  getModuloId(id: number): Observable<Modulo> {
    return this.http.get<Modulo>(`${this.urlBuscarModulo}${id}`);
  }

  //** Insertar */

  insertarModulo(obj: Modulo) {
    // console.log(obj);
    return this.http.post(this.urlInsertarModulo, obj);
  }

  // ** Eliminar

  deleteModulo(id: number) {
    // console.log(id);
    return this.http.delete(`${this.urlEliminarModulo}${id}`);
  }

  // ** Actualizar

  updateModulo(id: number, obj: Modulo) {
    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urlUpdateModulo}${id}`, obj);
  }
}
