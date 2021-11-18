import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeScan } from 'rxjs';
import { ListaService } from '../lista/lista.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public inputNombre:string = '';
  public inputApellidos:string = '';

  constructor(private router: Router, private lista: ListaService) {}


  mainButton(): void {

    // console.log(this.inputNombre);
    // console.log(this.inputApellidos);
    // return;

    // this.lista.nombre = this.inputNombre;   
    this.lista.guardarDatos(this.inputNombre, this.inputApellidos);

    this.router.navigate(['Listado']);        
  }

 


  ngOnInit(): void {
    
    
  }

}
