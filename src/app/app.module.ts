import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentePrincipal } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    ComponentePrincipal,
    ListaComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ComponentePrincipal]
})
export class AppModule { }
