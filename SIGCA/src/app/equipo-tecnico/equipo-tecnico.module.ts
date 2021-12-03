import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UsuarioRutasComponent } from './usuario-rutas.component';
import { ReportesRutasComponent } from './reportes/reportes-rutas.component';
import { ReportesModule } from './reportes/reportes.module';
import { MainCrearModuloComponent } from './crearModulo/main-crear-modulo/main-crear-modulo.component';
import { CrearModuloPrincipalComponent } from './crearModulo/crear-modulo-principal/crear-modulo-principal.component';
import { CrearSeminarioPrincipalComponent } from './crearSeminario/crear-seminario-principal/crear-seminario-principal.component';
import { MainSeminarioComponent } from './crearSeminario/main-seminario/main-seminario.component';
import { MainBancoModuloComponent } from './asignacionBancaModulo/main-banco-modulo/main-banco-modulo.component';
import { MainControlarModuloComponent } from './controlarModulo/main-controlar-modulo/main-controlar-modulo.component';
import { HttpClientModule } from '@angular/common/http';
import { CuadroSesionesComponent } from './crearModulo/cuadro-sesiones/cuadro-sesiones.component';
import { RecursosComponent } from './crearModulo/recursos/recursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'crearModulo', component: MainCrearModuloComponent },
  { path: 'reportes', component: ReportesRutasComponent },
  { path: 'crearSeminario', component: MainSeminarioComponent },
  { path: 'asignacion', component: MainBancoModuloComponent },
  { path: 'controlarModulo', component: MainControlarModuloComponent },
];

@NgModule({
  declarations: [
    UsuarioRutasComponent,
    CrearModuloPrincipalComponent,
    MainCrearModuloComponent,
    CrearSeminarioPrincipalComponent,
    MainSeminarioComponent,
    MainBancoModuloComponent,
    MainControlarModuloComponent,
    CuadroSesionesComponent,
    RecursosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReportesModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class EquipoTecnicoModule {}