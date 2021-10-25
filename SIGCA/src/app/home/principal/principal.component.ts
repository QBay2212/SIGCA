import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SIGCA-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  statusReceived:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  recibirEstado(status:boolean){
    this.statusReceived=status;
   // alert(this.statusReceived)
  }

  
}
