import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programacion } from 'src/app/models/programacion';

@Injectable({
  providedIn: 'root',
})
export class MainControlarModuloService {
  urlTraerProgramacion: string =
    'https://sigca-upeu.herokuapp.com/api/programacion/allTrue';

  urlTraerProgramacionFalse: string =
    'https://sigca-upeu.herokuapp.com/api/programacion/allFalse';

  urlUpdateProgramacion: string =
    'https://sigca-upeu.herokuapp.com/api/programacion/update/';

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
