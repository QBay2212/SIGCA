import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavTopComponent } from './nav-top/nav-top.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavTopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
