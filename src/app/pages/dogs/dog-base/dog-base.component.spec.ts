import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBaseComponent } from './dog-base.component';

describe('DogBaseComponent', () => {
  let component: DogBaseComponent;
  let fixture: ComponentFixture<DogBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
