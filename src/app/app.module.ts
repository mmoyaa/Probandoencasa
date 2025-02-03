import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Probando2Component } from './modulos/probando2/probando2.component';
import { Probando1Component } from './modulos/probando1/probando1.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { MatPaginatorModule } from '@angular/material/paginator';  // Módulo para paginación (opcional)
import { MatSortModule } from '@angular/material/sort';  

@NgModule({
  declarations: [
    AppComponent,
    Probando2Component,
    Probando1Component,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatTableModule, NgbModule,  HttpClientModule,MatSortModule,MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
