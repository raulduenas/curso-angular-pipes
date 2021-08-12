import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  nombreLower: string = 'raúl';
  nombreUpper: string = 'RAÚL';
  nombreCompleto: string = 'raÚl dueÑas';

  fecha: Date = new Date();   // El día de hoy

}
