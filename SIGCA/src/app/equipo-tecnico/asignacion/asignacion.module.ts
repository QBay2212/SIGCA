import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsignacionRutasComponent } from "./asignacion-rutas.component";
import { MainAsignarBanco_Modulo } from "./AsignarBanco_Modulo/main-asignar-banco-modulo.component";

const routes : Routes =[
  {path: 'asignarbancomodulo', component: MainAsignarBanco_Modulo}
]

@NgModule({
  declarations:[
    AsignacionRutasComponent,
    MainAsignarBanco_Modulo,

  ],
  imports:[
    CommonModule,RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AsignacionModule { }
