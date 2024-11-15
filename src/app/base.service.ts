import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private databaseURL = "https://foodshop-4301b-default-rtdb.europe-west1.firebasedatabase.app/termekek.json"
  private url="http://localhost:3000/products/"

  constructor(private http:HttpClient) { }

  getFoods(){
    return this.http.get(this.databaseURL)

  }
}
