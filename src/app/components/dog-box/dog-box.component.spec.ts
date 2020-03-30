import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBoxComponent } from './dog-box.component';

describe('DogBoxComponent', () => {
  let component: DogBoxComponent;
  let fixture: ComponentFixture<DogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
