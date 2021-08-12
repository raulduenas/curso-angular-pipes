import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }

  title = 'pipesApp';
  nombre: string = 'raÚl dueÑas'
  numero: number = 1000;
  obj: object = {nombre: "Raúl"};

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.numero);
    console.log(this.obj);
  }
}
