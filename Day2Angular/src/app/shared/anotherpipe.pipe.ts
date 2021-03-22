import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anotherpipe'
})
export class AnotherpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
