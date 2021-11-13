import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'SIGCA-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 
    _CargarScripts.Carga(["expotar"]);
  }
  ngOnInit(): void {
  }

}


