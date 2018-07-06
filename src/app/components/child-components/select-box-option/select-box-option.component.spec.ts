import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxOptionComponent } from './select-box-option.component';

describe('SelectBoxOptionComponent', () => {
  let component: SelectBoxOptionComponent;
  let fixture: ComponentFixture<SelectBoxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
