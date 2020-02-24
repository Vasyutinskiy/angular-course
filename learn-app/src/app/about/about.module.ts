import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './containers/about/about.component';


@NgModule({
  declarations: [ComponentsComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
