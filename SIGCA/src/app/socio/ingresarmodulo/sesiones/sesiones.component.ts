import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { SocioService } from '../../socio.service';

@Component({
  selector: 'SIGCA-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {

  constructor(private pedido:SocioService, private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(['expotar']);

   }

  ngOnInit(): void {
  }

}
