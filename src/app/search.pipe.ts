import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(foods:any[], keresoSzo:string): any {
    if (!foods) return null;
    if (!keresoSzo) return foods
    return foods.filter(
      (elem)=>{
        return elem.leiras.toLowerCase().includes(keresoSzo.toLowerCase())
      }
    )
  }
}


