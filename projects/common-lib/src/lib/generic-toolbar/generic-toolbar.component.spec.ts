import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericToolbarComponent } from './generic-toolbar.component';

describe('GenericToolbarComponent', () => {
  let component: GenericToolbarComponent;
  let fixture: ComponentFixture<GenericToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
