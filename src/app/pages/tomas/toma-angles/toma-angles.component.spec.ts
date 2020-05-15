import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaAnglesComponent } from './toma-angles.component';

describe('TomaAnglesComponent', () => {
  let component: TomaAnglesComponent;
  let fixture: ComponentFixture<TomaAnglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaAnglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaAnglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
