import { Component, OnInit } from '@angular/core';
import { RegionesService } from '../../servicios/regiones.service';

@Component({
  selector: 'app-probando7',
  templateUrl: './probando7.component.html',
  styleUrls: ['./probando7.component.scss']
})
export class Probando7Component {
  ngOnInit() {

    this.getRegiones();
  }
  comunService: RegionesService;

  constructor(comunService: RegionesService) {
    this.comunService = comunService;
  }




  regiones: any[] = [];
  getRegiones() {
    this.comunService.getRegiones().subscribe((res: any) => {
      console.log(res);
      this.regiones = res;
  }
)}


movall: any[] = []; // Lista de movimientos
    movimientosSeleccionados: any[] = []; // Lista de movimientos seleccionados
    movimientoSeleccionado: FormControl = new FormControl(''); // FormControl para el select
  
    movimientoSeleccionados: FormControl = new FormControl('');
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
