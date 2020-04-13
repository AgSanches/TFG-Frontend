import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionBoxComponent } from './conclusion-box.component';

describe('ConclusionBoxComponent', () => {
  let component: ConclusionBoxComponent;
  let fixture: ComponentFixture<ConclusionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
