import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionObservationComponent } from './session-observation.component';

describe('SessionObservationComponent', () => {
  let component: SessionObservationComponent;
  let fixture: ComponentFixture<SessionObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
