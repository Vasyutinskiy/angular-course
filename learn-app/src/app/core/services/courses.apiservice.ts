import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Course} from '../../core/models/course.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${BASE_URL}/courses`);
  }

  deleteCourse(id: number) {
    return this.http.delete<Course[]>(`${BASE_URL}/courses/${id}`);
  }

}
