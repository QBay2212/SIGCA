import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PrivilegiosUsuario } from 'src/app/equipo-tecnico/reportes/reporte';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'SIGCA-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id=Number(sessionStorage.getItem('idusuario'));
  @Output() link:EventEmitter<string> = new EventEmitter;
  @Input() opened:boolean=true;
  @ViewChild('enlace') enlace:ElementRef | any;
  @ViewChild('enlace_dos') enlace_dos:ElementRef | any;
  @ViewChild('submenu') submenu:ElementRef | any;
  @ViewChild('submenu2') submenu2:ElementRef | any;
  estado_desplegar1:boolean=false;
  estado_desplegar2:boolean=false;
  privi:PrivilegiosUsuario[]=[];
  constructor(private ren2: Renderer2,private privilegios:SidebarService) {

  }

 ngOnInit(): void {
  this.privilegios.getPrivilegios(this.id).subscribe(listas=>{
    this.privi=listas;
    console.log(this.privi);
    
   
  });
 }


 enviarCrearModulo(i:number):void{
  var  x=String(this.privi[i].NO_PRIVILEGIOS);
  this.link.emit(x);
 }
 seguimientoSocio():void{
  this.link.emit('asesor');
  
}
 enviarParticipacion():void{
   this.link.emit('equipo-tecnico/reportes/reporte-participacion');
  
 }
 enviarParticipantes():void{
   this.link.emit('equipo-tecnico/reportes/reporte-participantes');
 }

 enviarSeminario():void{
   this.link.emit('equipo-tecnico/reportes/reporte-seminario');
 }

 enviarBancaModulo():void{
  this.link.emit('equipo-tecnico/bancaModulo');
 }

 enviarControlarModulo():void{
  this.link.emit('equipo-tecnico/controlarModulo');
 }

 enviarCrearSeminario():void{
   this.link.emit('equipo-tecnico/crearSeminario');
 }
 enviarAsignarBanco_Modulo():void{
   this.link.emit('equipo-tecnico/asignacion');
 }

desplegar(){
   const a = this.enlace.nativeElement;
   const submenu = this.submenu.nativeElement;
   const height = submenu.scrollHeight;
   const sibling = this.ren2.nextSibling(a);
   if ( sibling.classList.contains( 'mostrar' )) {
     this.ren2.removeClass( sibling,'mostrar');
     this.ren2.removeAttribute(submenu,"style");
   }else{
      this.ren2.addClass(sibling,'mostrar');
      this.ren2.setStyle(submenu,"height",height+"px");
   }
}

desplegar2(){
 const a = this.enlace_dos.nativeElement;
 const submenu2 = this.submenu2.nativeElement;
 const height = submenu2.scrollHeight;
 const sibling = this.ren2.nextSibling(a);
 if ( sibling.classList.contains( 'mostrar' )) {
     this.ren2.removeClass( sibling,'mostrar');
     this.ren2.removeAttribute(submenu2,"style");
   }else{
      this.ren2.addClass(sibling,'mostrar');
      this.ren2.setStyle(submenu2,"height",height+"px");
   }
}

}
