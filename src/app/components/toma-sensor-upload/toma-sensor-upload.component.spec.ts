import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaSensorUploadComponent } from './toma-sensor-upload.component';

describe('TomaSensorUploadComponent', () => {
  let component: TomaSensorUploadComponent;
  let fixture: ComponentFixture<TomaSensorUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaSensorUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomaSensorUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
