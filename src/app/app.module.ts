import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericToolbarComponent } from './generic-toolbar/generic-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
