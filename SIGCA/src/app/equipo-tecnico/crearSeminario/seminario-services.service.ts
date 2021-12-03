import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seminario } from 'src/app/models/Seminario';

@Injectable({
  providedIn: 'root'
})
export class SeminarioServicesService {

  constructor(private http:HttpClient) {
   }
   private urlpost:string ='http://localhost:9090/api/seminario/all'; 
   getSeminarios(): Observable<Seminario[]>{
    return this.http.get<Seminario[]>(this.urlpost)
  }
}
