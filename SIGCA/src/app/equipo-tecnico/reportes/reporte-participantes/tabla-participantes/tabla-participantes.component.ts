import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ReportesService } from '../../reportes.service';

@Component({
  selector: 'SIGCA-tabla-participantes',
  templateUrl: './tabla-participantes.component.html',
  styleUrls: ['./tabla-participantes.component.css']
})
export class TablaParticipantesComponent implements OnInit {
  reportes: any=[];
  constructor(private _CargarScripts:CargarScriptsService,private reporte:ReportesService, private route:Router) { 
    _CargarScripts.Carga(["expotar"], );
  }
  ngOnInit(): void {
    var x=Number(sessionStorage.getItem('banco'));
    var y=Number(sessionStorage.getItem('modulo'));
    this.reporte.getParticipantes(x,y).subscribe((data: any[])=>{
    this.reportes=data
    console.log(this.reporte);
    sessionStorage.removeItem('banco');
    sessionStorage.removeItem('modulo');
    });
  }
  
 

}
