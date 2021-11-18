import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentePrincipal } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Inicio', pathMatch: 'full'
  },
  {
    path: 'Inicio',
    component: MainComponent
  },
  {
    path: 'Listado',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
