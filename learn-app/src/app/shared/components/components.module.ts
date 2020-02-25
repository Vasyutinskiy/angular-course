import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class ComponentsModule { }