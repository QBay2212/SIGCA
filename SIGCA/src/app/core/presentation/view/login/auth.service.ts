import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol, Usuario } from 'src/app/equipo-tecnico/reportes/reporte';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario:Usuario;
  private _token: string;
 
   constructor(private http:HttpClient) { 
     this._usuario = new Usuario();
     this._token = "";
   }
   private urlpost:string ='https://sigca-upeu.herokuapp.com/api/rol/roles';
   public get usuario():Usuario{
     if(this._usuario != null){
       return this._usuario;
     }else if(this._usuario == null && sessionStorage.getItem('usuario')!=null){
         this._usuario = JSON.parse(sessionStorage.getItem('usuario')!) as Usuario;
         return this._usuario;
     }
     return new Usuario();
   }
   public get token():string | any{
     if(this._token != null){
       return this._token;
     }else if(this._token == null && sessionStorage.getItem('token')!=null){
         this._token = sessionStorage.getItem('token') || '{}';
         return this._token;
     }
     return null;
 
   }
 
   login(usuario: Usuario):Observable<any>{
    
     const urlEndpoint = 'https://sigca-upeu.herokuapp.com/oauth/token';
     const credenciales = btoa('angularapp' + ':' + '1234567');
     const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization': 'Basic '+ credenciales});
     let params = new URLSearchParams();
     params.set('grant_type', 'password');
     params.set('username', usuario.username);
     params.set('password', usuario.password);
 
     return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
   }
   guardarUsuario(accessToken: string):void{
     let payload = this.obtenerDatosToken(accessToken);
     this._usuario = new Usuario();
     
     this._usuario.username = payload.user_name;
     this._usuario.roles = payload.authorities;
     sessionStorage.setItem("idusuario", payload.id);
     sessionStorage.setItem("nombreusuario", payload.nombre);
     sessionStorage.setItem("usuario", JSON.stringify(this._usuario));
     
   }
   guardarToken(accessToken:string):void{
       this._token = accessToken;
       sessionStorage.setItem('token',accessToken);
   }
 
   obtenerDatosToken(accessToken:string):any{
       if(accessToken != null){
         if(accessToken.length>0){
           return JSON.parse(atob(accessToken.split('.')[1]));
         }      
       }
         return null;       
   }
 
 isAuthenticated():boolean{
   let payload = this.obtenerDatosToken(this.token);
 
   if(payload !=null && payload.user_name && payload.user_name.length >0){
       return true;
   }
 return false;
 }
 logout():void{
  // this._token=null;
  // this._usuario = null;
   sessionStorage.clear();
   sessionStorage.removeItem('token');
   sessionStorage.removeItem('usuario');
 }

 getRoles(id:number){
  return this.http.get<Rol[]>(`${this.urlpost}/${id}`)
 }
}
