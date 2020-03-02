import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from './services/courses.service';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import { Course } from 'src/app/core/models/course.model';
import {fromEvent, Subject} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  course: Course[];

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    this.CoursesService.getCourse().pipe(
      tap(data => (this.course = data))
    ).subscribe();

    // Subject - producer. When next works on Subject - all subscribers got new DATA
    const subject = new Subject<number>();
    // subscriber
    const subject$ = subject.asObservable();

    const sub1 = subject$.subscribe((data) => console.log(data));
    const sub2 = subject$.subscribe((data) => console.log(data));

    // RXjs click listener .subscribe
    // FromEvent - producer that generate pipe of data
    // fromEvent(document.body, 'click').subscribe((event) => {
    //   console.log('Click!!!RxJs', event);
    // });
    // With pipe usage(map, filter etc returns Observable)
    fromEvent(document.body, 'click').pipe(
      map((x: MouseEvent) => x.clientX),
      filter(x => x % 5 === 0),
      tap(x => subject.next(x))
    ).subscribe();
    // native example of click listener
    document.body.addEventListener('click', () => {
      console.log('Native Click!');
    });
  }

  handleDelete(id: number) {
    this.CoursesService.deleteCourse(id)
      .pipe(
        switchMap(() => this.CoursesService.getCourse()),
        tap(data => (this.course = data))
        // tap(() => console.log(data))
      )
      .subscribe();
  }
}
