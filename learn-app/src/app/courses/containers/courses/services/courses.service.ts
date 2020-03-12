import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {tap, switchMap} from 'rxjs/operators';
import { ApiService } from '../../../../core/services/courses.apiservice';
import { LoaderService } from 'src/app/core/services/loader.service';

import {Course} from '../../../../core/models/course.model';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class CoursesService {

  private courseSubject: Subject<Course[]> = new Subject();
  courses: Observable<Course[]> = this.courseSubject.asObservable();

  constructor(private ApiService: ApiService,
    private LoaderService: LoaderService) {}


    loadCourses () {
      this.LoaderService.show();
      // return this.getCourse().pipe(
      //   tap(course => this.courseSubject.next(course)),
      //   tap(() => this.LoaderService.hide())
      // );

      // Shorter Way and much better for testing!!!
      return this.getCourse().pipe(
        tap(this.onCoursesRecieve)
      );
    }

    deleteCourseById(id: number): Observable<{}> {
      this.LoaderService.show();
      return this.deleteCourse(id).pipe(
        // switchMap switch into another Observable
        switchMap(() => this.getCourse()),
        tap(this.onCoursesRecieve)
      )

    }

    // why I can't use private here????
    getCourse(): Observable<Course[]> {
        return this.ApiService.getCourse();
    }

    // why I can't use private here????
    deleteCourse(id: number): Observable<{}> {
      return this.ApiService.deleteCourse(id);
    }


    // Way to make loadCourses clearer
    onCoursesRecieve = (course: Course[]) => {
      this.courseSubject.next(course);
      this.LoaderService.hide();
    }

}
