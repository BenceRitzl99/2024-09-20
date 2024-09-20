import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  kereso=new BehaviorSubject("")
  constructor() { }

  getSearchWord(){
    return this.kereso
  }

  setSearchWord(keresoSzo:string){
    this.kereso.next(keresoSzo)
  }
}
