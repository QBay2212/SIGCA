import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainControlarModuloService } from 'src/app/controlarModulo/main-controlar-modulo.service';
import { Programacion } from 'src/app/models/programacion';

@Component({
  selector: 'SIGCA-main-controlar-modulo',
  templateUrl: './main-controlar-modulo.component.html',
  styleUrls: ['./main-controlar-modulo.component.css'],
})
export class MainControlarModuloComponent implements OnInit {
  status: boolean = true; // **para la logica inical y controlar el boton rojo
  status2: boolean = false; //**para la logica inical y controlar el boton azul
  remplazo: any[] = [];
  updProgramacion: Programacion = new Programacion();
  arrayProgramacionTrue: any[] = [];
  @ViewChild('buttonTrue') buttonTrue: ElementRef | any;
  @ViewChild('buttonFalse') buttonFalse: ElementRef | any;

  constructor(private programacion: MainControlarModuloService) {}

  ngOnInit(): void {
    this.getPrograming();
  }

  getPrograming(): void {
    this.programacion.getProgramacion().subscribe((e) => {
      this.arrayProgramacionTrue = e;
      console.log(this.arrayProgramacionTrue);
    });

    this.status = true;
    this.status2 = false;
  }

  traerEstado(id: number): boolean {
    if (id == 1) {
      return true;
    } else {
      return false;
    }
  }

  cambiarChecked(id: number, idbanco: number, idmodulo: number) {
    if (this.status) {
      this.updProgramacion.es_programacion = 0;
      this.updProgramacion.banco = { id_bancocomunal: idbanco };
      this.updProgramacion.modulo = { id_modulo: idmodulo };
      this.programacion
        .updateProgramacion(id, this.updProgramacion)
        .subscribe();
    } else {
      this.updProgramacion.es_programacion = 1;
      this.updProgramacion.banco = { id_bancocomunal: idbanco };
      this.updProgramacion.modulo = { id_modulo: idmodulo };
      this.programacion
        .updateProgramacion(id, this.updProgramacion)
        .subscribe();
    }
    this.getPrograming();
  }

  ListarModuloDisabled() {
    this.programacion.getProgramacionFalse().subscribe((e) => {
      this.arrayProgramacionTrue = e;
    });

    this.status = false;
    this.status2 = true;
  }

  limpiar() {
    this.updProgramacion.es_programacion = undefined;
    this.updProgramacion.banco = null;
    this.updProgramacion.modulo = null;
    this.updProgramacion.id_programacion = 0;
  }
}
