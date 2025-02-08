import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Probando2Component } from './modulos/probando2/probando2.component';
import { Probando1Component } from './modulos/probando1/probando1.component';
import { Probando3Component } from './modulos/probando3/probando3.component';
import { Probando4Component } from './modulos/probando4/probando4.component';

const routes: Routes = [
  {path : '' , redirectTo : '/probando1' , pathMatch : 'full'},
  {path:'probando2',component:Probando2Component},
  {path:'probando1',component:Probando1Component},
  {path:'probando3',component:Probando3Component},
  {path:'probando4',component:Probando4Component},

];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
