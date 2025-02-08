import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegionesService } from 'src/app/servicios/regiones.service';
import { HttpClientModule } from '@angular/common/http';
import { reduce } from 'rxjs';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region';

import { MatPaginator } from '@angular/material/paginator';  // Para la paginación (opcional)
import { MatSort } from '@angular/material/sort';  // Para el ordenamiento (opcional)
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';








@Component({
  selector: 'app-probando2',
  templateUrl: './probando2.component.html',
  styleUrls: ['./probando2.component.scss']
})
export class Probando2Component implements OnInit{
  ngOnInit(): void {
 
  }

    validadorform = new FormGroup({
      dato1: new FormControl('', [Validators.required]),
      dato2: new FormControl('', [Validators.required]),
      dato3: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      validacion: new FormControl('', [Validators.required])
    });




submit() {
  console.log(this.validadorform.value);
  this.validadorform.reset();
}







}