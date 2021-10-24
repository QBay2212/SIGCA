import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'SIGCA-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ingresar( documento: string, contrasena: string ) {
    if (documento == "71285543" && contrasena == "123456") {
      this.router.navigate(["/home"],{relativeTo:this.route});
    } else {
      alert("DNI y/o contraseña incorrectos")
    }

    // console.log(documento)
    // console.log(contrasena)
  }

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void{}

  // ingresarCuenta(){

  //     this.router.navigate(["/home"],{relativeTo:this.route});
  // }
}
