import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaSensorsComponent } from './toma-sensors.component';

describe('TomaSensorsComponent', () => {
  let component: TomaSensorsComponent;
  let fixture: ComponentFixture<TomaSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
