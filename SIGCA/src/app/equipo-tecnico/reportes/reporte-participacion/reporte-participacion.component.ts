import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'SIGCA-reporte-participacion',
  templateUrl: './reporte-participacion.component.html',
  styleUrls: ['./reporte-participacion.component.css']
})
export class ReporteParticipacionComponent implements OnInit {
  model: any={};
  constructor() { }

  ngOnInit(): void {
  }

  go(sesion:String){

    var x=Number(sesion);
    
    if(x==0){
      let tabla1='tabla1';
    (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
    }

    if(x!=0){
      let tabla1='tabla2';
    (<HTMLIFrameElement>document.getElementById('tablas')).src = tabla1;
    }


  }
 
}
