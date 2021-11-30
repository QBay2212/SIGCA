import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavTopComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavTopComponent],
})
export class HomeModule {}
