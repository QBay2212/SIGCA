import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SIGCA-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recibirEstado(status:boolean):void{
    //alert(this.statusReceived);
  }
}
