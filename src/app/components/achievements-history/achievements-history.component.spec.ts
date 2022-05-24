import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsHistoryComponent } from './achievements-history.component';

describe('AchievementsHistoryComponent', () => {
  let component: AchievementsHistoryComponent;
  let fixture: ComponentFixture<AchievementsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
