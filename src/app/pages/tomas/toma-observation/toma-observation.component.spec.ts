import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaObservationComponent } from './toma-observation.component';

describe('TomaObservationComponent', () => {
  let component: TomaObservationComponent;
  let fixture: ComponentFixture<TomaObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
