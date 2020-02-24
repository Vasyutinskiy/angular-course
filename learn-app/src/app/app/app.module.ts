import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app/app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from '../about/containers/about/about.component';
import { CoursesComponent } from '../courses/containers/courses/courses.component';
// import { CourseComponent } from '../courses/containers/course/containers/course.component';
import { AppRoutingModule } from '../app/app.routing-module';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    AboutComponent,
    CoursesComponent,
    // CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
