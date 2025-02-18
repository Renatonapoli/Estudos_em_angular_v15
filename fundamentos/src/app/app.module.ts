import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponente } from './components/primeiro-componente/pirmeiro-compoente.component';
import { hooksComponent } from './components/componente-hooks/hook.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PrimeiroComponente, hooksComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
