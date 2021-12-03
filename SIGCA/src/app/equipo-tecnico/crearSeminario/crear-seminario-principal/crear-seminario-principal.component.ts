import { Component, OnInit } from '@angular/core';
import { Seminario } from 'src/app/models/Seminario';
import { SeminarioServicesService } from '../seminario-services.service';

@Component({
  selector: 'SIGCA-crear-seminario-principal',
  templateUrl: './crear-seminario-principal.component.html',
  styleUrls: ['./crear-seminario-principal.component.css']
})
export class CrearSeminarioPrincipalComponent implements OnInit {
  semi:Seminario[]=[];

  constructor(private seminario:SeminarioServicesService) { }

  ngOnInit(): void {
    this.seminario.getSeminarios().subscribe(listas=>{
      this.semi=listas;
    });
  }

}
