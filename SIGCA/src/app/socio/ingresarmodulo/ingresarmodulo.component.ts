import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'SIGCA-ingresarmodulo',
  templateUrl: './ingresarmodulo.component.html',
  styleUrls: ['./ingresarmodulo.component.css']
})
export class IngresarmoduloComponent implements OnInit {
  @Output() link:EventEmitter<string> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  entrarModulo():void{
    this.link.emit('socio/ingresarmodulo/sesiones')

  }
}
