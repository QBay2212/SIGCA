import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'SIGCA-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
 
  @Output() statusSidebar:EventEmitter<boolean> = new EventEmitter();
  estadoActual=true;
  nombre=sessionStorage.getItem('nombreusuario');

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleSidebar(){
    if (this.estadoActual==false) {
    this.estadoActual=true;
    this.statusSidebar.emit(this.estadoActual); 
    } else {
    this.estadoActual=false;
    this.statusSidebar.emit(this.estadoActual); 
    }
  }

}
