import { TestBed } from '@angular/core/testing';

import { Plan.VolunteerService } from './plan.volunteer.service';

describe('Plan.VolunteerService', () => {
  let service: Plan.VolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Plan.VolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
