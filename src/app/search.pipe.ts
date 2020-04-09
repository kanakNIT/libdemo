import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
      console.log('item', items)
      console.log('ser', searchText)

    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.includes(searchText);
    });
   }
}