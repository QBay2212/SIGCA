import { Component, OnInit } from '@angular/core';
import { Recurso } from 'src/app/models/recurso';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'SIGCA-main-crear-modulo',
  templateUrl: './main-crear-modulo.component.html',
  styleUrls: ['./main-crear-modulo.component.css'],
})
export class MainCrearModuloComponent implements OnInit {
  datosSesion: Sesion[] = [];
  estadoCuadro: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  recibirDatosSesion(datos: any) {
    this.datosSesion = datos;
    this.estadoCuadro = true;
    // console.log(this.datosSesion);
  }
}
