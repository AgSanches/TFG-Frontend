import { TestBed } from '@angular/core/testing';

import { TomasService } from './tomas.service';

describe('TomasService', () => {
  let service: TomasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
