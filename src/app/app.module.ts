import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GreenButtonPocModule } from 'green-button-poc';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreenButtonPocModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
