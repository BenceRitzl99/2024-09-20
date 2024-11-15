import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ShopComponent } from './shop/shop.component';
import { RendelesLeadasComponent } from './rendeles-leadas/rendeles-leadas.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"foods",component:ShopComponent},
  {path:"login",component:LoginComponent},
  {path:"leadas",component:RendelesLeadasComponent},
  
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
