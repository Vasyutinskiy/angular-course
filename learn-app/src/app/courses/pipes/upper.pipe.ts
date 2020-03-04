import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appUpper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
