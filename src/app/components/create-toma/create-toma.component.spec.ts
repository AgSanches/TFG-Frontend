import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTomaComponent } from './create-toma.component';

describe('CreateTomaComponent', () => {
  let component: CreateTomaComponent;
  let fixture: ComponentFixture<CreateTomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
