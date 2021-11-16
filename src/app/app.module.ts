import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentePrincipal } from './app.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    ComponentePrincipal,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ComponentePrincipal]
})
export class AppModule { }
