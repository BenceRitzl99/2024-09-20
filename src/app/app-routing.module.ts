import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"foods",component:FoodsComponent},
  {path:"login",component:LoginComponent},
  
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
