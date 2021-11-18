import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';

export interface PeriodicElement {
  nombre: string;
  apellidos: string;

}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  public displayedColumns: Array<string> = ['nombre', 'apellidos'];
  public dataSource: PeriodicElement[] = [
    {nombre: 'dsa', apellidos: 'asdf'},
    {nombre: 'asd', apellidos: 'dfsa'},
  ];



  constructor(private lista: ListaService) {}
  
  ngOnInit(): void {

    this.dataSource.push(this.lista.exportarDatos());

  }

}
