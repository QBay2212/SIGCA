import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRutasComponent } from './reportes-rutas.component';
import { ReporteParticipacionComponent } from './reporte-participacion/reporte-participacion.component';
import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './reporte-participacion/tabla1/tabla1.component';
import { ReporteParticipantesComponent } from './reporte-participantes/reporte-participantes.component';
import { TablaParticipantesComponent } from './reporte-participantes/tabla-participantes/tabla-participantes.component';
import { ReporteSeminarioComponent } from './reporte-seminario/reporte-seminario.component';
import { TablaSeminariosComponent } from './reporte-seminario/tabla-seminarios/tabla-seminarios.component';
import { ParticipacionModule } from './reporte-participacion/participacion.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes : Routes =[
  {path:'reporte-participacion', component:ReporteParticipacionComponent,children:[
    {path:'tabla1', component:Tabla1Component}
  ]},
  {path:'reporte-participantes', component:ReporteParticipantesComponent},
  {path:'reporte-seminario', component:ReporteSeminarioComponent}
]


@NgModule({
  declarations: [
    ReportesRutasComponent,
    ReporteParticipacionComponent,
    Tabla1Component,
    ReporteParticipantesComponent,
    TablaParticipantesComponent,
    ReporteSeminarioComponent,
    TablaSeminariosComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes),ParticipacionModule,HttpClientModule,FormsModule
  ]
})
export class ReportesModule { }
