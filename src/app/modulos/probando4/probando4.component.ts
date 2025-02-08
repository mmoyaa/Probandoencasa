import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-probando4',
  templateUrl: './probando4.component.html',
  styleUrls: ['./probando4.component.scss']
})
export class Probando4Component implements OnInit {

  validadorform: FormGroup = this.fb.group({});
  isValidacionChecked: boolean = false;  // Variable para el estado del checkbox

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validadorform = this.fb.group({
      dato1: ['', Validators.required],
      dato2: ['', Validators.required],
      dato3: ['', Validators.required],
      validacion: [false],  // Al inicio el checkbox está desmarcado
      nombre: [''],
      apellido: [''],
      edad: ['']
    });

    // Configurar la validación dinámica para campos "nombre", "apellido", "edad" según el checkbox
    this.validadorform.get('validacion')?.valueChanges.subscribe(value => {
      this.isValidacionChecked = value;  // Actualizamos el estado del checkbox

      if (value) {
        this.validadorform.get('nombre')?.setValidators([Validators.required]);
        this.validadorform.get('apellido')?.setValidators([Validators.required]);
        this.validadorform.get('edad')?.setValidators([Validators.required]);
      } else {
        this.validadorform.get('nombre')?.clearValidators();
        this.validadorform.get('apellido')?.clearValidators();
        this.validadorform.get('edad')?.clearValidators();
      }

      // Actualizar la validez de los campos correspondientes
      this.validadorform.get('nombre')?.updateValueAndValidity();
      this.validadorform.get('apellido')?.updateValueAndValidity();
      this.validadorform.get('edad')?.updateValueAndValidity();
    });
  }

  submit() {
    if (this.validadorform.valid) {
      console.log("Formulario válido", this.validadorform.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}