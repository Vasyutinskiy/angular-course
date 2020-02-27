import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './containers/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about.routing-module';


@NgModule({
  declarations: [ComponentsComponent, AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
