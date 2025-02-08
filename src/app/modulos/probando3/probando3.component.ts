import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-probando3',
  templateUrl: './probando3.component.html',
  styleUrls: ['./probando3.component.scss']
})
export class Probando3Component implements OnInit {
  validadorform: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validadorform = this.fb.group({
      dato1: ['', Validators.required],
      dato2: ['', Validators.required],
      dato3: ['', Validators.required],
      validacion: ['', Validators.required],
      nombre: [''],
      apellido: [''],
      edad: ['']
    });

    // Configurar la validación dinámica para campos "nombre", "apellido", "edad" según "validacion"
    this.validadorform.get('validacion')?.valueChanges.subscribe(value => {
      if (value === 'si') {
        this.validadorform.get('nombre')?.setValidators([Validators.required]);
        this.validadorform.get('apellido')?.setValidators([Validators.required]);
        this.validadorform.get('edad')?.setValidators([Validators.required]);
      } else {
        this.validadorform.get('nombre')?.clearValidators();
        this.validadorform.get('apellido')?.clearValidators();
        this.validadorform.get('edad')?.clearValidators();
      }
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