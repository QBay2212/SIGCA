import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pedido } from '../models/pedido';
import { SocioService } from './socio.service';
import { FormsModule } from '@angular/forms';
import { Sesion } from '../equipo-tecnico/reportes/reporte';
import swal from 'sweetalert2';
import { Seminario } from '../models/Seminario';
import { CargarScriptsService } from '../cargar-scripts.service';
import { Progreso } from '../models/Progreso';

@Component({
  selector: 'SIGCA-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  semi:Seminario[]=[];
  oracion: Pedido = new Pedido();
  model:any=[];
  en:any=[];
  asis:any=[];
  progres:any=[]
   x=Number(sessionStorage.getItem('idusuario'));
  constructor(private pedido:SocioService, private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(['expotar']);

   }

  ngOnInit(): void {
    this.model.des='Escribir pedido, agradecimiento o necesidad';
    this.listarDistritos();
   
    

  }

  Progreso():void{
    this.pedido.getProgreso(this.x).subscribe(listas=>{
      this.progres=listas;
      console.log(this.progres)
    });
  }

  guardarpedido():void{
    this.oracion.de_pedidooracion=this.model.des;
    this.oracion.socio = { id: this.x };
    
    this.pedido.insertarModulo(this.oracion).subscribe((e) => {
      this.model.des='';
      console.log(e);
     
     
    });
    swal.fire({
      title: 'Registro Pedido',
      text: 'Su pedido de oracion ha sido registrado con exito',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    

    
  }
  limpiar(){
    this.model.des='';
  }
  listarDistritos(){
  
     this.pedido.getSeminarios(this.x).subscribe(listas=>{
       this.semi=listas;
       console.log(this.semi)
      
     });
   }
   entrar(i:number){
    this.asis=this.semi[i];
  }

}
