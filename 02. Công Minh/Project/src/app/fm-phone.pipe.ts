import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fmPhone'
})
export class FmPhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `(${value.slice(0,3)}) ${value.slice(3,value.length)}`;
  }
}
