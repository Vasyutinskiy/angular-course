import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  // any added for example
  @Input() item: Course;
  // ADDED EventEmitter - notifier for parent that event happen
  @Output() deleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deleted.emit(this.item.id);
  }

}
