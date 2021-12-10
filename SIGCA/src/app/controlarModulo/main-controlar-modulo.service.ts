import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programacion } from 'src/app/models/programacion';

@Injectable({
  providedIn: 'root',
})
export class MainControlarModuloService {
  urlTraerProgramacion: string =
    'http://localhost:9090/api/programacion/allTrue';

  urlTraerProgramacionFalse: string =
    'http://localhost:9090/api/programacion/allFalse';

  urlUpdateProgramacion: string =
    'http://localhost:9090/api/programacion/update/';

  constructor(private http: HttpClient) {}

  getProgramacion(): Observable<[]> {
    return this.http.get<[]>(this.urlTraerProgramacion);
  }

  getProgramacionFalse(): Observable<[]> {
    return this.http.get<[]>(this.urlTraerProgramacionFalse);
  }

  updateProgramacion(id: number, obj: Programacion) {
    //    console.log(id);
    console.log(obj);
    return this.http.put(`${this.urlUpdateProgramacion}${id}`, obj);
  }
}
