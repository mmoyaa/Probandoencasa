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

-----------------------------------------------------------------

  movall: any[] = []; // Lista de movimientos
  movimientosSeleccionados: any[] = []; // Lista de movimientos seleccionados
  movimientoSeleccionado: FormControl = new FormControl(''); // FormControl para el select


  movimientoSeleccionados: FormControl = new FormControl('');
constructor(private regionesService: RegionesService) { }
    validadorform = new FormGroup({
      dato1: new FormControl('', [Validators.required]),
      dato2: new FormControl('', [Validators.required]),
      dato3: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      validacion: new FormControl('', [Validators.required])
    });


  
    // Método para cargar los movimientos desde el backend
    getmovimientos() {
      this.regionesService.getmovimientos().subscribe((res: any) => {
        this.movall = res;
        console.log(this.movall);
      });
    }
  
    // Método para agregar el movimiento seleccionado a la grilla
    agregarMovimiento() {
      const selectedId = this.movimientoSeleccionado.value;
      const movimiento = this.movall.find(m => m.id == selectedId);
  
      // Evitar duplicados en la grilla
      const yaExiste = this.movimientosSeleccionados.some(m => m.id == movimiento.id);
  
      if (movimiento && !yaExiste) {
        this.movimientosSeleccionados.push(movimiento);
      }
    }
  
    // Método para eliminar un movimiento de la grilla
    eliminarMovimiento(id: number) {
      this.movimientosSeleccionados = this.movimientosSeleccionados.filter(m => m.id !== id);
    }
  
    // Método para guardar los movimientos en el backend
    guardarMovimientos() {
      if (this.movimientosSeleccionados.length === 0) {
        alert('No hay movimientos para guardar.');
        return;
      }
  
      this.regionesService.guardarMovimientos(this.movimientosSeleccionados).subscribe({
        next: (res) => {
          console.log('Movimientos guardados correctamente:', res);
          alert('Movimientos guardados exitosamente!');
          this.movimientosSeleccionados = []; // Limpiar tabla
        },
        error: (err) => {
          console.error('Error al guardar movimientos:', err);
          alert('Hubo un error al guardar los movimientos.');
        }
      });
    }




}
