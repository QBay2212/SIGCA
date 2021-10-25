import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './core/presentation/view/login/login.component';
import { NavTopComponent } from './home/nav-top/nav-top.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';


const routes : Routes =[
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:PrincipalComponent}
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
    RouterModule.forRoot(routes),CoreModule,SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
