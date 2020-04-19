import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaVideosComponent } from './toma-videos.component';

describe('TomaVideosComponent', () => {
  let component: TomaVideosComponent;
  let fixture: ComponentFixture<TomaVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
