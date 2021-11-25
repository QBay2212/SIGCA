import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/equipo-tecnico/reportes/reporte';
import { ReportesService } from 'src/app/equipo-tecnico/reportes/reportes.service';

@Component({
  selector: 'SIGCA-reportesocio',
  templateUrl: './reportesocio.component.html',
  styleUrls: ['./reportesocio.component.css']
})
export class ReportesocioComponent implements OnInit {
sesiones: Sesion[]=[];
 modulo=Number(sessionStorage.getItem('modulo'));
  constructor(private sesion:ReportesService, private router:Router) { }

  ngOnInit(): void {
    this.sesion.getSesion(this.modulo).subscribe(listas=>{
      this.sesiones=listas;
      
     
    });
  }

}
