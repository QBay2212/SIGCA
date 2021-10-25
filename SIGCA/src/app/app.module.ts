import { SidebarComponent } from './home/sidebar/sidebar.component';
import { PrincipalComponent } from './home/principal/principal.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from 'ng-sidebar';
import { PagesLoginComponent } from './core/presentation/pages/pages-login/pages-login.component';
import { FormsModule } from '@angular/forms';
import { NavTopComponent } from './home/nav-top/nav-top.component';

const routes : Routes =[
  {path: '', component:PagesLoginComponent},
  {path:'dashboard', component:PrincipalComponent}
]
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
    RouterModule.forRoot(routes),CoreModule,SidebarModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
