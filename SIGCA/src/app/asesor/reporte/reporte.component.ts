import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/equipo-tecnico/reportes/reporte';
import { ReportesService } from 'src/app/equipo-tecnico/reportes/reportes.service';

@Component({
  selector: 'SIGCA-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  sesiones: Sesion[]=[];
  reportes: any=[];
  model:any=[];
  modulo=Number(sessionStorage.getItem('modulo'));
  banco=Number(sessionStorage.getItem('banco'));
  constructor(private sesion:ReportesService, private router:Router) { }
  ngOnInit(): void {
    this.sesion.getSesion(this.modulo).subscribe(listas=>{
      this.sesiones=listas;
     
    });

  }
  listartabla(){
    var x=Number(this.model.sesion)
    this.sesion.getParticipacionSesiones(this.banco,this.modulo,x).subscribe(listas=>{
      this.reportes=listas;
     console.log(this.reportes)
    });
  }
  litarmodal(i:number){
    var  x=Number(this.reportes[i].ID);
    alert("ID:"+x)
  }
  

  
}
