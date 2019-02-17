import {NgModule} from '@angular/core';
import {
  GenericToolbarComponent, ItemDirective, ToolbarGroup, ToolbarItem,
  ToolbarRow
} from './generic-toolbar/generic-toolbar.component';
import {CommonModule} from '@angular/common';
import { SimpleToolbarComponent } from './simple-toolbar/simple-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GenericToolbarComponent, SimpleToolbarComponent, ToolbarRow, ToolbarGroup, ToolbarItem, ItemDirective],
  exports: [GenericToolbarComponent, SimpleToolbarComponent, ToolbarRow, ToolbarGroup, ToolbarItem, ItemDirective]
})
export class CommonLibModule {
}
