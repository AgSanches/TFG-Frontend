import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaEditComponent } from './toma-edit.component';

describe('TomaEditComponent', () => {
  let component: TomaEditComponent;
  let fixture: ComponentFixture<TomaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
