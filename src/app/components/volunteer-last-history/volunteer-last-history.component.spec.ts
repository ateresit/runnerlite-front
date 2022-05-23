import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerLastHistoryComponent } from './volunteer-last-history.component';

describe('VolunteerLastHistoryComponent', () => {
  let component: VolunteerLastHistoryComponent;
  let fixture: ComponentFixture<VolunteerLastHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerLastHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerLastHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
