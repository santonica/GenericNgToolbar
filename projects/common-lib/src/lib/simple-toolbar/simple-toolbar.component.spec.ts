import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToolbarComponent } from './simple-toolbar.component';

describe('SimpleToolbarComponent', () => {
  let component: SimpleToolbarComponent;
  let fixture: ComponentFixture<SimpleToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
