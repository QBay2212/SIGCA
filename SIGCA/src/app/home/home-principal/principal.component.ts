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

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  recibirEstado(status:boolean):void{
    this.statusReceived=status;
    //alert(this.statusReceived);
  }


  recibirLink(link:string):void{
    const iframe = this.iframe.nativeElement;
    this.renderer.setAttribute(iframe,'src',link);
  }

  
}
