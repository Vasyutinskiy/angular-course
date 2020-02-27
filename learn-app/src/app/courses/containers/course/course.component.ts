import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
    console.log(this.course);
  }

}
