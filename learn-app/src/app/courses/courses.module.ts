import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseComponent } from './containers/course/course.component';
import { CoursesRoutingModule } from './courses.routing-module';
import { SharedModule } from '../shared/shared.module';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { JoinPipe } from './pipes/join.pipe';
import { ConvertPipe } from './pipes/convert.pipe';
import { UpperPipe } from './pipes/upper.pipe';
import { HighlightCourseDirective } from './directives/highlight-course.directive';


@NgModule({
  declarations: [CoursesComponent, CourseComponent, NewCourseComponent, JoinPipe, ConvertPipe, UpperPipe, HighlightCourseDirective],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  exports: [
    JoinPipe, 
    ConvertPipe,
    UpperPipe
  ]
})
export class CoursesModule { }
