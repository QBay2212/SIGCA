import { Component, OnInit } from '@angular/core';
class Reporte{
 
  seminario?:String;
  sede?:String;
  distrito?:String;
  banco?:String;
  fecha?:String;
  progreso?:number;
}
@Component({
  selector: 'SIGCA-tabla-seminarios',
  templateUrl: './tabla-seminarios.component.html',
  styleUrls: ['./tabla-seminarios.component.css']
})
export class TablaSeminariosComponent implements OnInit {

reportes :  Reporte[]=[];
  constructor() { }

  ngOnInit(): void {
    this.reportes = [
      {
      
        seminario:"Facebook",
        sede:"APCN",
        distrito:"chaclacayo",
        banco:"Los geranios",
        fecha:"12/03/2021",
        progreso:100
      },
      {
       
        seminario:"Whatsaap",
        sede:"APCS",
        distrito:"chaclacayo",
        banco:"Vallecito",
        fecha:"02/03/2021",
        progreso:40
      },
       
      ];
  }
}
