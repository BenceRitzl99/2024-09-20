import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendeles-leadas',
  templateUrl: './rendeles-leadas.component.html',
  styleUrl: './rendeles-leadas.component.css'
})
export class RendelesLeadasComponent {

  name=""
  address=""
  constructor(private kosar:KosarService, private router:Router){
    
  }

  addOrder(){
    this.kosar.addOrder(this.name, this.address)
    this.router.navigate(["home"])
  }

}
