import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioRutasComponent } from './usuario-rutas.component';
import { MainCrearSeminarioComponent } from './crearSeminario/main-crear-seminario/main-crear-seminario.component';
import { ReportesRutasComponent } from './reportes/reportes-rutas.component';
import { ReportesModule } from './reportes/reportes.module';
import { CrearModuloPrincipalComponent } from './crearModulo/crear-modulo-principal/crear-modulo-principal.component';
import { MaincrearModuloComponent } from './crearModulo/maincrear-modulo/maincrear-modulo.component';
import { CrearModuloFormularioComponent } from './crearModulo/crear-modulo-formulario/crear-modulo-formulario.component';
import { CrearModuloFormulario2Component } from './crearModulo/crear-modulo-formulario2/crear-modulo-formulario2.component';


const routes : Routes =[
  {path:'reportes', component:ReportesRutasComponent}
]

@NgModule({
  declarations: [

    UsuarioRutasComponent,
    MainCrearSeminarioComponent,
    CrearModuloPrincipalComponent,
    MaincrearModuloComponent,
    CrearModuloFormularioComponent,
    CrearModuloFormulario2Component
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forRoot(routes),ReportesModule
  ]
})
export class EquipoTecnicoModule { }
