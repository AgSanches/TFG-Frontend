import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationBoxComponent } from './observation-box.component';

describe('ObservationBoxComponent', () => {
  let component: ObservationBoxComponent;
  let fixture: ComponentFixture<ObservationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
