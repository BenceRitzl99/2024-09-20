import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="http://localhost:3000/products/"

  constructor(private http:HttpClient) { }

  getFoods(){
    return this.http.get(this.url)

  }
}
