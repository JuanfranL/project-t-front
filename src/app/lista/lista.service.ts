import { Injectable } from '@angular/core';
import { PeriodicElement } from './lista.component';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private nombre: string = '';
  private apellidos: string = '';

  constructor() { }

  guardarDatos(nombre:string ,apellidos:string): void { 
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  exportarDatos(): PeriodicElement{
    const exportarObjetos: PeriodicElement = {
      nombre: this.nombre,
      apellidos: this.apellidos
    };
    return exportarObjetos;
  }

  
}
