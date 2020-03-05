import {Directive, Input, HostBinding, OnInit} from '@angular/core';
import {Course} from '../../core/models/course.model';

// enum CreationDetection {
//   NEW = '#30B6DD',
//   OLD = 'none'
// }

@Directive({
  selector: '[appHighlightCourse]'
})

export class HighlightCourseDirective implements OnInit {
  @HostBinding('class') classPropRef: string;
  // @HostBinding('style') newItemStyles: string;


  // HOW TO IMPLEMENT SAME WITH DIRECTIVES ngStyle and ngClass????????~!!!!! 


  @Input() onTrigeredClass: string;
  @Input() itemCourse: Course;
  // In case you should changed several cases - use set
  // @Input() set creationDate({creationDate}: any) {
  //   // this.newItemStyles = `border: 3px solid ${this.checkCreationDate(creationDate)}`;
  // }

  ngOnInit(): void {
    // example for dynamic class
    this.classPropRef = this.itemCourse.creationDate < 14 ? this.onTrigeredClass : '';
    // example only for style attribute
    // this.checkCreationDate(this.creationDate);
  }

  constructor() { }
  // function for style attribute usage
  // private checkCreationDate(creationDate: number) {
  //   if (creationDate <= 14) {
  //     return CreationDetection.NEW;
  //   }
  //   return CreationDetection.OLD;
  // }

}
