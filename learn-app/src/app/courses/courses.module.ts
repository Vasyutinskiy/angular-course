import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesRoutingModule } from './courses.routing-module';
import { SharedModule } from '../shared/shared.module';
import { NewCourseComponent } from './components/new-course/new-course.component';


@NgModule({
  declarations: [CoursesComponent, CourseComponent, NewCourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
})
export class CoursesModule { }
