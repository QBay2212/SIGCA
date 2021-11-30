import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'SIGCA-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  statusReceived:boolean=true;
  UrlIframe:string='';
  @ViewChild('marcoIframe') iframe:ElementRef | any;
  @ViewChild('sidebar') sidebar:ElementRef | any;

  constructor(private ren2: Renderer2) { }

  ngOnInit(): void {
  }

   recibirEstado(status:boolean):void{
     this.statusReceived=status;
  //   const iframe = this.iframe.nativeELement;
  //   const menu = this.sidebar.nativeElement;
  //   // if (this.statusReceived==false) {
  //   //    this.ren2.addClass(menu,'ocultar');
  //   //   this.ren2.addClass(iframe,'col-xl-12');
  //   // }else{
  //   //   this.ren2.removeClass(menu,'ocultar');
  //   //   this.ren2.addClass(menu,'col-xl-2');
  //   //   this.ren2.addClass(iframe,'col-xl-10');
  //   // }
   }


  recibirLink(link:string):void{
    console.log(link)
    const direccion = this.iframe.nativeElement;
    this.ren2.setAttribute(direccion,'src',link);
  }


}
