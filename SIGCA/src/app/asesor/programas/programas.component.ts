import { Component, OnInit } from '@angular/core';
import { ProgramaAsesor } from 'src/app/equipo-tecnico/reportes/reporte';
import { AsesorService } from '../asesor.service';


@Component({
  selector: 'SIGCA-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})

export class ProgramasComponent implements OnInit {

  constructor(private asesor:AsesorService, ) { }
  reportes :  ProgramaAsesor[]=[];
  model: any=[];
  ngOnInit(): void {
   
     this.asesor.getProgramasAsesor(6).subscribe(listas=>{
       this.reportes=listas;
       console.log( this.reportes);
      
     });
  }
 

}
