import { Component, OnInit } from '@angular/core';

class Reporte{
 
  seminario?:String;
  banco?:String;
}
@Component({
  selector: 'SIGCA-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})

export class ProgramasComponent implements OnInit {

  constructor() { }
  reportes :  Reporte[]=[];
  ngOnInit(): void {
    this.reportes = [
      {
      
        seminario:"Facebook",
        banco:"Vallecito",
      },
      {
       
        seminario:"Whatsaap",
        banco:"Los geranios",
        
      },
      {
       
        seminario:"Whatsaap",
        banco:"Las malvinas",
        
      }, 
      {
       
        seminario:"Whatsaap",
        banco:"Los geranios",
        
      },
      {
       
        seminario:"Whatsaap",
        banco:"Los geranios",
      },
      {
       
        seminario:"Whatsaap",
        banco:"Los geranios",
        
      }

       
      ];
  }

}
