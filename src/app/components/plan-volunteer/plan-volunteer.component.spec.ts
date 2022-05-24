import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanVolunteerComponent } from './plan-volunteer.component';

describe('PlanVolunteerComponent', () => {
  let component: PlanVolunteerComponent;
  let fixture: ComponentFixture<PlanVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanVolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
