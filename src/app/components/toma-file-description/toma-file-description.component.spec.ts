import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaFileDescriptionComponent } from './toma-file-description.component';

describe('TomaFileDescriptionComponent', () => {
  let component: TomaFileDescriptionComponent;
  let fixture: ComponentFixture<TomaFileDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaFileDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaFileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
