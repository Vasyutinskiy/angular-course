import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appConvert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);  
    let minutes = value % 60;
    return `${hours} h ${minutes} min`;  
  }
}
