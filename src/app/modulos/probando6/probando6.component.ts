import { Component, OnInit } from '@angular/core';
import { RegionesService } from '../../servicios/regiones.service';
@Component({
  selector: 'app-probando6',
  templateUrl: './probando6.component.html',
  styleUrls: ['./probando6.component.scss']
})


 
export class Probando6Component implements OnInit {
  ngOnInit() {

    this.getRegiones();
  }
  comunService: RegionesService;

  constructor(comunService: RegionesService) {
    this.comunService = comunService;
  }

  // Variables para los estados de los checkboxes
  isFirstSemesterSelected = false;
  isSecondSemesterSelected = false;
  isReajusteVEnabled = false;
  isReajusteUTMEnabled = false;

  // Variables para los campos de texto
  year: string = '';
  vIPC: string = '';
  pesoOro: string = '';
  vUTM: string = '';
  expiryDate: string = '';

  // Variable para almacenar el resultado del reajuste
  resultadoReajuste: number | null = null;

  // Variable para mostrar el mensaje de error en el botón Reajuste prueba
  errorReajustePrueba: boolean = false;

  // Variable para habilitar o deshabilitar el botón Reajuste Final
  isReajusteFinalEnabled: boolean = false;

  // Función para manejar la selección de semestres
  toggleSemester() {
    if (this.isFirstSemesterSelected) {
      this.isSecondSemesterSelected = false;
    } else if (this.isSecondSemesterSelected) {
      this.isFirstSemesterSelected = false;
    }
  }

  // Función para manejar el estado de los reajustes
  toggleReajusteFields() {
    if (this.isReajusteVEnabled) {
      this.isReajusteUTMEnabled = false;
      this.vUTM = '';
    }

    if (this.isReajusteUTMEnabled) {
      this.isReajusteVEnabled = false;
      this.vIPC = '';
      this.pesoOro = '';
    }
  }

  // Método para calcular el reajuste y mostrar el resultado
  calcularReajuste() {
    const vIPCNumber = parseFloat(this.vIPC);
    const pesoOroNumber = parseFloat(this.pesoOro);

    if (!isNaN(vIPCNumber) && !isNaN(pesoOroNumber)) {
      this.resultadoReajuste = vIPCNumber * pesoOroNumber;
    } else {
      this.resultadoReajuste = null;
      alert('Por favor, ingrese valores numéricos válidos en V.IPC y Peso Oro');
    }

    this.validarReajusteFinal(); // Verificar si habilitar el botón Reajuste Final
  }

  // Método para validar y mostrar mensaje de error en el botón Reajuste prueba
  validarReajustePrueba() {
    if (!this.vIPC || this.vIPC.trim() === '') {
      this.errorReajustePrueba = true;
    } else {
      this.errorReajustePrueba = false;
      console.log('Reajuste prueba con valor:', this.vIPC);
    }
  }

  // Método para habilitar o deshabilitar el botón Reajuste Final
  validarReajusteFinal() {
    if (this.year && this.resultadoReajuste !== null) {
      this.isReajusteFinalEnabled = true;
    } else {
      this.isReajusteFinalEnabled = false;
    }
  }

  // Método que se ejecuta cuando se presiona el botón "Reajuste Final"
  enviarReajusteFinal() {
    if (this.year && this.resultadoReajuste !== null) {
      console.log('Año:', this.year);
      console.log('Resultado Final es:', this.resultadoReajuste);
    } else {
      alert('Debe ingresar un año y el resultado de prueba antes de continuar');
    }
  }


  enviarReajusteFinalDerecha() {
    if (this.year && this.vUTM) {
      // Si los valores son válidos, los muestra en consola o realiza alguna acción
      console.log('Año:', this.year);
      console.log('V. UTM:', this.vUTM);

 
    } else {
      // Si falta algún campo, muestra un mensaje de error
      console.error('Por favor, ingresa tanto el Año como el V. UTM.');
    }
  }

regiones: any[] = [];
  getRegiones() {
    this.comunService.getRegiones().subscribe((res: any) => {
      console.log(res);
      this.regiones = res;
  }
)}
}