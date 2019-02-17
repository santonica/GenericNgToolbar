import {
  Component, ComponentFactoryResolver, ContentChildren, Directive, EventEmitter, Input, OnInit, Output, QueryList,
  ViewEncapsulation
} from '@angular/core';
import {ToolBarItem} from "./tool-bar-models";


@Directive({selector: '*'})
export class ItemDirective {
}

@Component({
  selector: 'toolbar-item',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./generic-toolbar.component.scss']
})
export class ToolbarItem {

  @Input('targetURL') targetURL: URL;
  @Output ('clicked') navigateTo = new EventEmitter<URL>();
  @ContentChildren(ItemDirective) icon: QueryList<ItemDirective>;

  showTarget() {
    this.navigateTo.emit(this.targetURL);
    console.log("##### showTarget called with event delegation");
  }
}

@Component({
  selector: 'toolbar-group',
  template: `<ng-content select="toolbar-item"></ng-content>`,
  styleUrls: ['./generic-toolbar.component.scss']
})
export class ToolbarGroup {

  @ContentChildren(ToolbarItem) _toolbarRows: QueryList<ToolbarItem>;

}

@Component({
  selector: 'toolbar-row',
  template: `<ng-content select="toolbar-group"></ng-content>
<ng-content select="toolbar-item"></ng-content>`,
  styleUrls: ['./generic-toolbar.component.scss']
})
export class ToolbarRow {
  @ContentChildren(ToolbarItem) _toolbarRows: QueryList<ToolbarItem>;
  @ContentChildren(ToolbarGroup) _toolbarGroups: QueryList<ToolbarGroup>;
}


@Component({
  selector: 'generic-toolbar',
  templateUrl: './generic-toolbar.component.html',
  styleUrls: ['./generic-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericToolbarComponent implements OnInit {

  @ContentChildren(ToolbarRow) _toolbarRows: QueryList<ToolbarRow>;


  items: ToolBarItem[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.items = [];
  }


  ngOnInit() {

  }

}


