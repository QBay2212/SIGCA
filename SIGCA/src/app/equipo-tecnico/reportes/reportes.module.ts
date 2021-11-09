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

const routes : Routes =[
  {path:'reporte-participacion', component:ReporteParticipacionComponent},
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
    CommonModule,RouterModule.forRoot(routes)
  ]
})
export class ReportesModule { }
