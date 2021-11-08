import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'SIGCA-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Output() link:EventEmitter<string> = new EventEmitter;
  @Input() opened:boolean=true;
  @ViewChild('enlace') enlace:ElementRef | any; 
  @ViewChild('enlace_dos') enlace_dos:ElementRef | any; 
  estado_desplegar1:boolean=false;
  estado_desplegar2:boolean=false;

  constructor(private ren2: Renderer2) {

   }

  ngOnInit(): void {
  }


  enviarCrearModulo():void{
    this.link.emit('equipo-tecnico/crearModulo');
  }

  enviarCrearSeminario():void{
    this.link.emit('equipo-tecnico/crearSeminario');
  }

desplegar(){
    const a = this.enlace.nativeElement;
    const sibling = this.ren2.nextSibling(a);
    if ( sibling.classList.contains( 'mostrar' )) {
      this.ren2.removeClass( sibling,'mostrar');
    }else{
       this.ren2.addClass(sibling,'mostrar')
    }
}

desplegar2(){
  const a = this.enlace_dos.nativeElement;
  const sibling = this.ren2.nextSibling(a);
  if ( sibling.classList.contains( 'mostrar' )) {
      this.ren2.removeClass( sibling,'mostrar');
    }else{
       this.ren2.addClass(sibling,'mostrar')
    }
}

}
