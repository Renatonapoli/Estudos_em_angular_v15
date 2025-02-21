import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaItemComponent } from './components/lista-items/lista-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListaItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
