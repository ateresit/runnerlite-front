import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersLastResultComponent } from './runners-last-result.component';

describe('RunnersLastResultComponent', () => {
  let component: RunnersLastResultComponent;
  let fixture: ComponentFixture<RunnersLastResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnersLastResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersLastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
