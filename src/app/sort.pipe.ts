import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(foods:any[],irany:number): any {
    console.log("Irány:", irany)
    if (!foods) return null;
    if (irany==0) return foods
    foods=foods.sort(
      (a,b)=>{
        let x=Number(a.ar)-Number(b.ar)
        return irany==1?x:-x}
      )
    
    return foods
  }

}
