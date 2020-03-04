import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective {

  // ?????? Is that wright???
  @HostBinding ('style') newItemStyles: string

  @Input() set creationDate (creationDate: number) {
    this.newItemStyles = `border: 1px solid ${this.checkCreationDate()}`;
  }

  ngOnInit(): void {
    this.checkCreationDate();
  }

  // creationBorder

  constructor() { }

  private checkCreationDate(): void{
    // if()??????
  }

}
