import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {}

  mainButton() {

    this.router.navigate(['Listado']);

    const algo = 'hola';
    console.log(algo);
    // console.log ("hola");
    
  }

  ngOnInit(): void {
  }

}
