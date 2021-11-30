import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { SocioService } from './socio.service';
import { FormsModule } from '@angular/forms';
import { Sesion } from '../equipo-tecnico/reportes/reporte';

@Component({
  selector: 'SIGCA-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
 
  oracion: Pedido = new Pedido();
  model:any=[];
   x=Number(sessionStorage.getItem('idusuario'));
  constructor(private pedido:SocioService) { }

  ngOnInit(): void {
  }

  recibirEstado(status:boolean):void{
   
  }

  guardarpedido():void{
    this.oracion.de_pedidooracion=this.model.des;
    this.oracion.socio = { id: this.x };
    this.pedido.insertarModulo(this.oracion).subscribe((e) => {
      console.log(e);
    });
    
    
  }
}
