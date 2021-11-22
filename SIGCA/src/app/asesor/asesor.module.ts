import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRutasComponent } from './asesor-rutas.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas/programas.component';
import { FormsModule } from '@angular/forms';
import { ReportesocioComponent } from './reportesocio/reportesocio.component';


const routes : Routes =[
  {path:'programa', component:ProgramasComponent},
  {path:'reporte-asesor', component:ReportesocioComponent},
 
]

@NgModule({
  declarations: [
    AsesorRutasComponent,
    ProgramasComponent
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes), FormsModule
  ]
})
export class AsesorModule { }
