import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavTopComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HomeModule { }
