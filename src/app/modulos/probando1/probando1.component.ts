import { Component } from '@angular/core';
import { NUEVOService } from 'src/app/servicios/nuevo.service';

@Component({
  selector: 'app-probando1',
  templateUrl: './probando1.component.html',
  styleUrls: ['./probando1.component.scss']
})
export class Probando1Component {
constructor(public nuevoService: NUEVOService) { }


}

