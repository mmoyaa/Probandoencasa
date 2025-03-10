import { Component } from '@angular/core';

@Component({
  selector: 'app-probando5',
  templateUrl: './probando5.component.html',
  styleUrls: ['./probando5.component.scss']
})
export class Probando5Component {


    // Variables para los semestres y reajustes
    isFirstSemesterSelected = false;
    isSecondSemesterSelected = false;
    isReajusteVEnabled = false;
    isReajusteUTMEnabled = false;
  
    // Variables para los campos
    year: string = '';
    vIPC: string = '';
    pesoOro: string = '';
    vUTM: string = '';
    expiryDate: string = '';
  
    // Resultado del reajuste
    resultadoReajuste: number | null = null;
  
    // Habilitar/deshabilitar botones
    isReajusteFinalEnabled: boolean = false;
  
    // Función para manejar la selección de semestres
    toggleSemester() {
      if (this.isFirstSemesterSelected) {
        this.isSecondSemesterSelected = false;
      } else if (this.isSecondSemesterSelected) {
        this.isFirstSemesterSelected = false;
      }
    }
  
    // Función para calcular el reajuste y mostrar el resultado
    calcularReajuste() {
      const vIPCNumber = parseFloat(this.vIPC);
      const pesoOroNumber = parseFloat(this.pesoOro);
      
      if (this.isReajusteVEnabled && !isNaN(vIPCNumber) && !isNaN(pesoOroNumber)) {
        this.resultadoReajuste = vIPCNumber * pesoOroNumber;
      } else if (this.isReajusteUTMEnabled && this.vUTM) {
        this.resultadoReajuste = parseFloat(this.vUTM); // Ajuste basado en el valor de UTM
      } else {
        this.resultadoReajuste = null;
      }
  
      this.validarReajusteFinal();
    }
  
    // Validar si se puede activar el botón de reajuste final
    validarReajusteFinal() {
      if (this.year && this.resultadoReajuste !== null) {
        this.isReajusteFinalEnabled = true;
      } else {
        this.isReajusteFinalEnabled = false;
      }
    }
  
    // Método para enviar reajuste final
    enviarReajusteFinal() {
      console.log('Reajuste Final Enviado', this.resultadoReajuste);
    }
  
    // Método para validar el reajuste de prueba
    validarReajustePrueba() {
      console.log('Reajuste Prueba:', this.vIPC || this.vUTM);
    }
  
    // Método que se ejecuta cuando se presiona el botón "Reajuste Final Derecha"
    enviarReajusteFinalDerecha() {
      if (this.year && this.vUTM) {
        console.log('Reajuste U.T.M. Enviado');
        console.log('Año:', this.year);
        console.log('Fecha de Vencimiento:', this.expiryDate);
        console.log('V. UTM:', this.vUTM);
    
      } else {
        console.error('Por favor, ingresa tanto el Año como el V. UTM.');
      }
    }
    enviarReajusteFinalIzquierda() {
      if (this.isReajusteVEnabled && this.year && this.resultadoReajuste !== null) {
        // Enviar solo si Reajuste V es habilitado
        console.log('Enviando Reajuste V, IPC/Peso Oro...');
        console.log('Año:', this.year);
        console.log('Fecha de Vencimiento:', this.expiryDate);
        console.log('V.IPC:', this.vIPC);
        console.log('Peso Oro:', this.pesoOro);
        console.log('Resultado del Reajuste:', this.resultadoReajuste);
      } else {
        alert('Debe ingresar un año y realizar el cálculo de Reajuste V antes de continuar');
      }



  }}
  