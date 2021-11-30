import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';



@NgModule({
  declarations: [
    NavTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  NavTopComponent
  ]
})
export class HomeModule { }
