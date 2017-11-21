import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sorting' })
export class SortingPipe implements PipeTransform {
  transform(records: Array<any>, args?: any): any {
    if(records){
      return records.sort(function(a, b){
        if(a[args.property] === undefined) a[args.property] = 0;
        if(b[args.property] === undefined) b[args.property] = 0;
        if(a[args.property] < b[args.property]){
          return -1 * args.direction;
        }
        else if( a[args.property] > b[args.property]){
          return 1 * args.direction;
        }
        else{
          return 0;
        }
      });
    }else{
      return records;
    }
  };
}



