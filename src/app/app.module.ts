import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent, IframeDirective} from './app.component';
import {CommonLibModule} from 'common-lib';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    IframeDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
