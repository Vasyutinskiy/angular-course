import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../core/services/courses.apiservice';

import {Course} from '../../../../core/models/course.model';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class CoursesService {

  constructor(private ApiService: ApiService) {}

    getCourse(): Observable<Course[]> {
        return this.ApiService.getCourse();
    }

    deleteCourse(id: number): Observable<{}> {
      return this.ApiService.deleteCourse(id);
    }

}
