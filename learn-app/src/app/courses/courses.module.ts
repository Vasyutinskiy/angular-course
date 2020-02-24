import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesRoutingModule } from '../courses/courses.routing-module';


@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ]
})
export class CoursesModule { }
