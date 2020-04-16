import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaVideoUploadComponent } from './toma-video-upload.component';

describe('TomaVideoUploadComponent', () => {
  let component: TomaVideoUploadComponent;
  let fixture: ComponentFixture<TomaVideoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaVideoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaVideoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
