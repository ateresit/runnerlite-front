import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetRunnerComponent } from './cabinet-runner.component';

describe('CabinetRunnerComponent', () => {
  let component: CabinetRunnerComponent;
  let fixture: ComponentFixture<CabinetRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetRunnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
