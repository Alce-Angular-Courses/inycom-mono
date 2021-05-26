import { TestBed } from '@angular/core/testing';

import { Corelib1Service } from './corelib1.service';

describe('Corelib1Service', () => {
  let service: Corelib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Corelib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
