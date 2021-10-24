import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/presentation/view/login/login.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';


const routes : Routes =[
  {path: '', component:LoginComponent},
  {path: 'home', component:SidebarComponent},
  {path: '**', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
