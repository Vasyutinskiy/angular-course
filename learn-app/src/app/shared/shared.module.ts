import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

const imports = [
  CommonModule,
  ComponentsModule
];

@NgModule({
  declarations: [TestComponent],
  imports,
  exports: [
    ComponentsModule,
    TestComponent
  ]
})
export class SharedModule { }
