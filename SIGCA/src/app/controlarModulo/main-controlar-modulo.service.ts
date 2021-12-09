import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainControlarModuloService {
  urlTraerProgramacion: string =
    'http://localhost:9090/api/programacion/allTrue';

  urlTraerProgramacionFalse: string =
    'http://localhost:9090/api/programacion/allFalse';

  constructor(private http: HttpClient) {}

  getProgramacion(): Observable<[]> {
    return this.http.get<[]>(this.urlTraerProgramacion);
  }

  getProgramacionFalse(): Observable<[]> {
    return this.http.get<[]>(this.urlTraerProgramacionFalse);
  }
}
