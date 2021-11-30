import { SidebarComponent } from './home/sidebar/sidebar.component';
import { PrincipalComponent } from './home/home-principal/principal.component';
import { CargarScriptsService } from './cargar-scripts.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from 'ng-sidebar';
import { PagesLoginComponent } from './core/presentation/pages/pages-login/pages-login.component';
import { FormsModule } from '@angular/forms';
import { NavTopComponent } from './home/nav-top/nav-top.component';
import { UsuarioRutasComponent } from './equipo-tecnico/usuario-rutas.component';
import { ReportesRutasComponent } from './equipo-tecnico/reportes/reportes-rutas.component';
import { ReporteParticipacionComponent } from './equipo-tecnico/reportes/reporte-participacion/reporte-participacion.component';
import { ReporteParticipantesComponent } from './equipo-tecnico/reportes/reporte-participantes/reporte-participantes.component';
import { ReporteSeminarioComponent } from './equipo-tecnico/reportes/reporte-seminario/reporte-seminario.component';
import { AsesorRutasComponent } from './asesor/asesor-rutas.component';
import { AsesorModule } from './asesor/asesor.module';
import { Tabla1Component } from './equipo-tecnico/reportes/reporte-participacion/tabla1/tabla1.component';
import { MaincrearModuloComponent } from './equipo-tecnico/crearModulo/maincrear-modulo/maincrear-modulo.component';
import { EquipoTecnicoModule } from './equipo-tecnico/equipo-tecnico.module';
import { ProgramasComponent } from './asesor/programas/programas.component';

import { HttpClientModule } from '@angular/common/http';
import { ReporteComponent } from './asesor/reporte/reporte.component';
import { SocioComponent } from './socio/socio.component';
import { SocioModule } from './socio/socio.module';
import { HomeModule } from './home/home.module';
import { SesionesComponent } from './socio/ingresarmodulo/sesiones/sesiones.component';

const routes : Routes =[
  {path: '', component:PagesLoginComponent},
  {path: 'vistaSocio', component:SocioComponent},
  {path: 'vistaModulo', component:SesionesComponent},
  {path:'asesor', component:AsesorRutasComponent,children:[
    {path:'programa', component:ProgramasComponent},
    {path:'reporte-asesor', component:ReporteComponent}
  ]},
  {path:'dashboard/equipoTecnico', component:PrincipalComponent},

  {path:'equipo-tecnico', component:UsuarioRutasComponent,
children:[
  {path:'crearModulo', component: MaincrearModuloComponent},
  {path:'reportes', component: ReportesRutasComponent, children:[
    {path:'reporte-participacion', component:ReporteParticipacionComponent, children:[
      {path:'tabla1',component:Tabla1Component}
    ]},
    {path:'reporte-participantes', component:ReporteParticipantesComponent},
    {path:'reporte-seminario', component:ReporteSeminarioComponent}
  ]},


]}
];
//cambios
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),CoreModule,SidebarModule.forRoot(),FormsModule,
    AsesorModule, EquipoTecnicoModule,HttpClientModule,HomeModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
