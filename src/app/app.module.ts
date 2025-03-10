import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Probando2Component } from './modulos/probando2/probando2.component';
import { Probando1Component } from './modulos/probando1/probando1.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


import { MatPaginatorModule } from '@angular/material/paginator';  
import { MatSortModule } from '@angular/material/sort';  
import { provideImageKitLoader } from '@angular/common';
import { ProbandomodalComponent } from './modulos/probandomodal/probandomodal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Probando3Component } from './modulos/probando3/probando3.component';
import { Probando4Component } from './modulos/probando4/probando4.component';
import { Probando5Component } from './modulos/probando5/probando5.component';
import { Probando6Component } from './modulos/probando6/probando6.component';

@NgModule({
  declarations: [
    AppComponent,
    Probando2Component,
    Probando1Component,
    ProbandomodalComponent,
    Probando3Component,
    Probando4Component,
    Probando5Component,
    Probando6Component,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatTableModule, NgbModule,  HttpClientModule,MatSortModule,MatPaginatorModule,      // Asegúrate de agregar MatTableModule
    ReactiveFormsModule,HttpClientModule,FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
