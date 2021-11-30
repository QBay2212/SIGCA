import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol, Usuario } from 'src/app/equipo-tecnico/reportes/reporte';
import { AuthService } from './auth.service';

@Component({
  selector: 'SIGCA-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a: any=[];
  usuario: Usuario;
  constructor(public authService: AuthService, private router:Router) { 
    this.usuario = new Usuario();
  }
  ngOnInit(): void{}

  // ingresarCuenta(){

  //     this.router.navigate(["/home"],{relativeTo:this.route});
  // }
  ingresar( ) {
    
    this.authService.login(this.usuario).subscribe(response =>{
      console.log(response);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      var x=Number(sessionStorage.getItem('idusuario'));
      this.authService.getRoles(x).subscribe((data: any[])=>{
        this.a=data
        console.log(this.a)
        for(let i = 0; i < this.a.length; i++){
          if(this.a[i].nombrerol=='Socio'){
            this.router.navigate(['/vistaSocio']);
          }else{
            this.router.navigate(['/dashboard/equipoTecnico']);
          }
        }
        });
     
     
    }
    );
  }
}
