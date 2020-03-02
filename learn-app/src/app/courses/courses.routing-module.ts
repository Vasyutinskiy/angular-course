import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';
import { NewCourseComponent } from './components/new-course/new-course.component';

const routes: Route[] = [
    {
        path: '',
        component: CoursesComponent
    },
    {
        path: 'add',
        component: NewCourseComponent
    }
];

@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
