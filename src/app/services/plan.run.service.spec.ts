import { TestBed } from '@angular/core/testing';

import { Plan.RunService } from './plan.run.service';

describe('Plan.RunService', () => {
  let service: Plan.RunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Plan.RunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
