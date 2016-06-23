import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string = ''): any {
    return value.filter( val => this.filter(val, args) );
  }

  private filter(value, pattern) {
    let lookup = (prop) => value[ prop ].toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    return lookup('firstname') || lookup('lastname');
  }

}
