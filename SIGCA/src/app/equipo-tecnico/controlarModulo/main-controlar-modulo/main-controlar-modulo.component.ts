import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainControlarModuloService } from 'src/app/controlarModulo/main-controlar-modulo.service';

@Component({
  selector: 'SIGCA-main-controlar-modulo',
  templateUrl: './main-controlar-modulo.component.html',
  styleUrls: ['./main-controlar-modulo.component.css'],
})
export class MainControlarModuloComponent implements OnInit {
  status: boolean = true; // **para la logica inical y controlar el boton rojo
  status2: boolean = false; //**para la logica inical y controlar el boton azul
  remplazo: any[] = [];
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

  cambiarChecked(id: number) {
    alert(id);
    // const check = this.checked.nativeElement;
    // console.log(check);
  }

  ListarModuloDisabled() {
    this.programacion.getProgramacionFalse().subscribe((e) => {
      this.arrayProgramacionTrue = e;
    });

    this.status = false;
    this.status2 = true;
  }
}
