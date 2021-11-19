import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioRutasComponent } from './usuario-rutas.component';

import { ReportesRutasComponent } from './reportes/reportes-rutas.component';
import { ReportesModule } from './reportes/reportes.module';
import { CrearModuloPrincipalComponent } from './crearModulo/crear-modulo-principal/crear-modulo-principal.component';
import { MaincrearModuloComponent } from './crearModulo/maincrear-modulo/maincrear-modulo.component';
import { CrearModuloFormularioComponent } from './crearModulo/crear-modulo-formulario/crear-modulo-formulario.component';
import { CrearModuloFormulario2Component } from './crearModulo/crear-modulo-formulario2/crear-modulo-formulario2.component';

import { AsignacionRutasComponent } from './asignacion/asignacion-rutas.component';




const routes : Routes =[
  {path:'reportes', component:ReportesRutasComponent},
  {path:'crearModulo', component:MaincrearModuloComponent},
  {path:'reportes', component:ReportesRutasComponent},
  {path:'asignacion', component:AsignacionRutasComponent}
]

@NgModule({
  declarations: [
    UsuarioRutasComponent,
    MainCrearSeminarioComponent,
    CrearModuloPrincipalComponent,
    MaincrearModuloComponent,
    CrearModuloFormularioComponent,
    CrearModuloFormulario2Component,
    MaincrearModuloComponent,
    FormularioCrearModuloComponent,
    CuadrosCrearModuloComponent,
    UsuarioRutasComponent

  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forRoot(routes),ReportesModule
  ]
})
export class EquipoTecnicoModule { }
