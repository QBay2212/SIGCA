import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'SIGCA-tabla-participantes',
  templateUrl: './tabla-participantes.component.html',
  styleUrls: ['./tabla-participantes.component.css']
})
export class TablaParticipantesComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) { 
    _CargarScripts.Carga(["expotar"]);
  }
  ngOnInit(): void {
  }

}
