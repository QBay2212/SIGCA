import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { ModulosService } from 'src/app/equipo-tecnico/crearModulo/service/modulos.service';
import { Sesion } from 'src/app/equipo-tecnico/reportes/reporte';
import { ReportesService } from 'src/app/equipo-tecnico/reportes/reportes.service';
import { Recurso } from 'src/app/models/recurso';
import { SocioService } from '../../socio.service';



@Component({
  selector: 'SIGCA-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {
  id_modulo = Number (sessionStorage.getItem('id_modulo'))
  sesiones : Sesion [] = [];
  recursos : any = [];
  x=Number(sessionStorage.getItem('idusuario'));
  constructor(private pedido:SocioService, private _CargarScripts: CargarScriptsService, private se :ReportesService, private recurso :ModulosService) {
    _CargarScripts.Carga(['expotar']);

   }

  ngOnInit(): void {
    this.listarsesion();
  }

     listarsesion(){
      this.se.getSesion(this.id_modulo).subscribe(listas=>{
       this.sesiones=listas;
      console.log(this.sesiones)

     });
   }

   listarRecurso(i:number){
     var id = Number(this.sesiones[i].id_SESION);
      this.pedido.getRecursosS(id,this.x).subscribe(listas=>{
      this.recursos=listas;
      console.log(this.recursos)

    });
   }
   guardarAsistencia(i:number){
     var xy = Number(this.recursos[i].ID_ASISTENCIA_RECURSO);

     var valor=Number(sessionStorage.getItem('valoracionseminario'));
     this.pedido.actualizarEstado(xy).subscribe((e) => {

      console.log(e);


    });
   }

}



