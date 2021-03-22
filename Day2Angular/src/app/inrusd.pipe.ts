import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrusd'
})
export class InrusdPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value*0.014;
  }

}
