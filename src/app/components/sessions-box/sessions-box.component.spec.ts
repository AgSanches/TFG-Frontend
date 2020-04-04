import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsBoxComponent } from './sessions-box.component';

describe('SessionsBoxComponent', () => {
  let component: SessionsBoxComponent;
  let fixture: ComponentFixture<SessionsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
