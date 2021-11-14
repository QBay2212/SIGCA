import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'SIGCA-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 
    _CargarScripts.Carga(["expotar"]);
  }

  ngOnInit(): void {
  }

}
