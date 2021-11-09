import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'SIGCA-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void{}

  // ingresarCuenta(){

  //     this.router.navigate(["/home"],{relativeTo:this.route});
  // }
  ingresar( documento: string, pass: string ) {
    if (documento == "123456" && pass == "123456") {
      //alert(documento)
     // alert(pass)
      this.router.navigate(["/dashboard/equipoTecnico"],{relativeTo:this.route});
    } else {
      alert("DNI y/o contraseña incorrectos")
    }

    // console.log(documento)
    // console.log(contrasena)
  }
}
