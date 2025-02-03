import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Probando2Component } from './modulos/probando2/probando2.component';
import { Probando1Component } from './modulos/probando1/probando1.component';

const routes: Routes = [
  {path : '' , redirectTo : '/probando1' , pathMatch : 'full'},
  {path:'probando2',component:Probando2Component},
  {path:'probando1',component:Probando1Component}

];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
