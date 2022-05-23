import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRunComponent } from './plan-run.component';

describe('PlanRunComponent', () => {
  let component: PlanRunComponent;
  let fixture: ComponentFixture<PlanRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
