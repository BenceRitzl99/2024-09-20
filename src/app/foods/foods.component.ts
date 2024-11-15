import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  foods:any=[]
  keresoSzo="császárszalonna"
  rendezesTomb=["Alapértelmezett", "Olcsók elől","Drágák elől"]
  rendezesAllapot=0

  constructor(public base:BaseService, private search:SearchService) {
    this.base.getFoods().subscribe(
      (res)=>this.foods=res
    )
    this.search.getSearchWord().subscribe(
      (res)=>this.keresoSzo=res
    )
  }

  

  onKeyUp(event:any){
    console.log()
    this.search.setSearchWord(event.target.value)
  }

  RendezesIranyValt(){
    this.rendezesAllapot=(this.rendezesAllapot==2?0:++this.rendezesAllapot)
    if (this.rendezesAllapot==0) this.rendezesAllapot=1
    }

}
