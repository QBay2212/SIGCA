import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainCrearModuloComponent } from './crearModulo/main-crear-modulo/main-crear-modulo.component';
import { FormularioCrearModuloComponent } from './crearModulo/formulario-crear-modulo/formulario-crear-modulo.component';
import { CuadrosCrearModuloComponent } from './crearModulo/cuadros-crear-modulo/cuadros-crear-modulo.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioRutasComponent } from './usuario-rutas.component';

import { ReportesRutasComponent } from './reportes/reportes-rutas.component';
import { ReportesModule } from './reportes/reportes.module';
import { AsignacionRutasComponent } from './asignacion/asignacion-rutas.component';


const routes : Routes =[
  {path:'crearModulo', component:MainCrearModuloComponent},
  {path:'reportes', component:ReportesRutasComponent},
  {path:'asignacion', component:AsignacionRutasComponent}
]

@NgModule({
  declarations: [
    MainCrearModuloComponent,
    FormularioCrearModuloComponent,
    CuadrosCrearModuloComponent,
    UsuarioRutasComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forRoot(routes),ReportesModule
  ]
})
export class EquipoTecnicoModule { }
