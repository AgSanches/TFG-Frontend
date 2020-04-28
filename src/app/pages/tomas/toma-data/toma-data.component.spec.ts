import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaDataComponent } from './toma-data.component';

describe('TomaDataComponent', () => {
  let component: TomaDataComponent;
  let fixture: ComponentFixture<TomaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
