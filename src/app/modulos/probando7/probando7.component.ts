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
}
