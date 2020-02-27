import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from '././services/courses.service';
import {tap} from 'rxjs/operators';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService],
})
export class CoursesComponent implements OnInit {

  course: Course[];

  constructor(private CoursesService: CoursesService) { }

  ngOnInit(): void {
    this.CoursesService.getCourse().pipe(
      tap(data => this.course = data)
    ).subscribe();
  }

}
