import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductionComponent} from "./production/production.component";
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'production',component:ProductionComponent},
  {path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
