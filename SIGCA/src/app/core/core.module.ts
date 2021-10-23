import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLoginComponent } from './presentation/pages/pages-login/pages-login.component';
import { LoginComponent } from './presentation/view/login/login.component';



@NgModule({
  declarations: [
    PagesLoginComponent,
    LoginComponent

  ],
  imports: [
    CommonModule

  ]
})
export class CoreModule { }
