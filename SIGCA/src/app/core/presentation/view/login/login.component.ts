import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/equipo-tecnico/reportes/reporte';
import { AuthService } from './auth.service';

@Component({
  selector: 'SIGCA-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      this.router.navigate(['/dashboard/equipoTecnico']);
      let usuario = this.authService.usuario;
      alert('Bienvenido:'+usuario.username)
     
    }
    );
  }
}
