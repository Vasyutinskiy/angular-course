import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const imports = [
  CommonModule,
  ComponentsModule
];

@NgModule({
  declarations: [],
  imports,
  exports: imports,
})
export class SharedModule { }
