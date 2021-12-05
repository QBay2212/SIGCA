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
  mo:any=[];
  en:any=[];
  asis:any=[];
  progres:any=[];
  pocision=0;
  idseminario=0;
   idusuario=Number(sessionStorage.getItem('idusuario'));
  constructor(private pedido:SocioService, private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(['expotar']);

   }

  ngOnInit(): void {
    this.model.des='Escribir pedido, agradecimiento o necesidad';
    this.mo.comentario='Escribir comentario';
    this.listarDistritos();



  }

  Progreso():void{
    this.pedido.getProgreso(this.idusuario).subscribe(listas=>{
      this.progres=listas;
      console.log(this.progres)
    });
  }

  guardarpedido():void{
    this.oracion.de_pedidooracion=this.model.des;
    this.oracion.socio = { id: this.idusuario };

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
  guardarasistencia(){

    var valor=Number(sessionStorage.getItem('valoracionseminario'));
    this.pedido.insertarasistencia(this.idusuario,this.idseminario,valor,this.mo.comentario)
    .subscribe((e) => {

      console.log(e);


    });

    swal.fire({
        title: "Asistencia Guardada",
        text: 'Su asistencia fue registrada con exito',
        icon: 'success',

        confirmButtonText: 'Confirmar',

        allowOutsideClick: false,
      })
      .then((resultado) => {
        if (resultado.value) {
          // Hicieron click en "Sí"
          window.location.reload();

        } else {
          // Dijeron que no
          console.log(' ');
        }
      });






  }
  limpiar(){
    this.model.des='';
    this.mo.comentario=''
  }
  listarDistritos(){
    var o=Number(sessionStorage.getItem('idusuario'));
     this.pedido.getSeminarios(o).subscribe(listas=>{
       this.semi=listas;
       console.log(this.semi)


     });
   }
   entrar(i:number){
    this.asis=this.semi[i];
    this.pocision=i;

  }

  Asistencia(i:number){

    this.idseminario=Number(this.semi[i].id_SEMINARIO);

  }
  Asis(){

    this.idseminario=Number(this.semi[this.pocision].id_SEMINARIO);

  }

}
