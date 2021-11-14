import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';
import { Tabla2Component } from './tabla2/tabla2.component';
import { FormsModule } from '@angular/forms';

const routes : Routes =[
  
    {path:'tabla1', component:Tabla1Component},
    {path:'tabla2', component:Tabla2Component}

]

@NgModule({
  declarations: [
    Tabla2Component
  ],
  imports: [
    CommonModule,RouterModule.forRoot(routes), FormsModule
  ]
})
export class ParticipacionModule { }
