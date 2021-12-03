import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModulosService } from '../service/modulos.service';

@Component({
  selector: 'SIGCA-cuadro-sesiones',
  templateUrl: './cuadro-sesiones.component.html',
  styleUrls: ['./cuadro-sesiones.component.css'],
})
export class CuadroSesionesComponent implements OnInit, OnChanges {
  @Input() datosMostrarSesion: any;
  recurso: any[] = [];
  constructor(private Service: ModulosService) {}

  ngOnChanges(): void {}
  ngOnInit(): void {}

  datosMostarRecurso(id: number): void {
    this.recurso.pop();
    this.Service.getRecursoSesion(id).subscribe((e) => {
      this.recurso.push(e);
    });

    console.log(this.recurso);
  }
}
