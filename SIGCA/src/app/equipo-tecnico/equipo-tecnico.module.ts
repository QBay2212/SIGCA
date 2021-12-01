import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioRutasComponent } from './usuario-rutas.component';
import { ReportesRutasComponent } from './reportes/reportes-rutas.component';
import { ReportesModule } from './reportes/reportes.module';
import { MaincrearModuloComponent } from './crearModulo/maincrear-modulo/maincrear-modulo.component';
import { AsignarBancoModuloComponent } from './asignar-banco-modulo/asignar-banco-modulo.component';
const routes : Routes =[
  {path:'crearModulo', component:MaincrearModuloComponent},
  {path:'reportes', component:ReportesRutasComponent}
]

@NgModule({
  declarations: [
    MaincrearModuloComponent,
    UsuarioRutasComponent,
    AsignarBancoModuloComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forRoot(routes),ReportesModule
  ]
})
export class EquipoTecnicoModule { }
