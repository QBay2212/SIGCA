import { SidebarComponent } from './home/sidebar/sidebar.component';
import { PrincipalComponent } from './home/home-principal/principal.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from 'ng-sidebar';
import { PagesLoginComponent } from './core/presentation/pages/pages-login/pages-login.component';
import { FormsModule } from '@angular/forms';
import { NavTopComponent } from './home/nav-top/nav-top.component';
import { EquipoTecnicoModule } from './equipo-tecnico/equipo-tecnico.module';
import { UsuarioRutasComponent } from './equipo-tecnico/usuario-rutas.component';
import { MainCrearModuloComponent } from './equipo-tecnico/crearModulo/main-crear-modulo/main-crear-modulo.component';
import { ReportesRutasComponent } from './equipo-tecnico/reportes/reportes-rutas.component';
import { ReporteParticipacionComponent } from './equipo-tecnico/reportes/reporte-participacion/reporte-participacion.component';
import { ReporteParticipantesComponent } from './equipo-tecnico/reportes/reporte-participantes/reporte-participantes.component';
import { ReporteSeminarioComponent } from './equipo-tecnico/reportes/reporte-seminario/reporte-seminario.component';
import { MainAsignarBanco_Modulo } from './equipo-tecnico/asignacion/AsignarBanco_Modulo/main-asignar-banco-modulo.component';

const routes : Routes =[
  {path: '', component:PagesLoginComponent},
  {path:'dashboard/equipoTecnico', component:PrincipalComponent},
  {path:'equipo-tecnico', component:UsuarioRutasComponent,
children:[
  {path:'crearModulo', component: MainCrearModuloComponent},
  {path:'reportes', component: ReportesRutasComponent, children:[
    {path:'reporte-participacion', component:ReporteParticipacionComponent},
    {path:'reporte-participantes', component:ReporteParticipantesComponent},
    {path:'reporte-seminario', component:ReporteSeminarioComponent}
  ]},

  {path:'asignacion', component: UsuarioRutasComponent, children:[
    {path:'asignarBanco-Modulo', component: MainAsignarBanco_Modulo}
  ]}
]}
];
//cambios
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PrincipalComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),CoreModule,SidebarModule.forRoot(),FormsModule,
    EquipoTecnicoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
