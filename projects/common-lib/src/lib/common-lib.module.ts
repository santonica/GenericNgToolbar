import { NgModule } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { GenericToolbarComponent } from './generic-toolbar/generic-toolbar.component';

@NgModule({
  imports: [
  ],
  declarations: [CommonLibComponent, GenericToolbarComponent],
  exports: [CommonLibComponent]
})
export class CommonLibModule { }
