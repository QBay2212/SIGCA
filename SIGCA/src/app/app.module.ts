import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/presentation/view/login/login.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SidebarModule } from 'ng-sidebar';

const routes : Routes =[
  {path: '', component:LoginComponent},
  {path: '**', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),CoreModule, HomeModule,SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
