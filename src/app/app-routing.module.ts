import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Probando2Component } from './modulos/probando2/probando2.component';
import { Probando1Component } from './modulos/probando1/probando1.component';
import { Probando3Component } from './modulos/probando3/probando3.component';
import { Probando4Component } from './modulos/probando4/probando4.component';
import { Probando5Component } from './modulos/probando5/probando5.component';
import { Probando6Component } from './modulos/probando6/probando6.component';
import { Probando7Component } from './modulos/probando7/probando7.component';

const routes: Routes = [
  {path : '' , redirectTo : '/probando1' , pathMatch : 'full'},
  {path:'probando2',component:Probando2Component},
  {path:'probando1',component:Probando1Component},
  {path:'probando3',component:Probando3Component},
  {path:'probando4',component:Probando4Component},
  {path:'probando5',component:Probando5Component},
  {path:'probando6',component:Probando6Component},
  {path:'probando7',component:Probando7Component}

];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
