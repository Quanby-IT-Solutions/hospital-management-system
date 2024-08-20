import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSchedulingComponent } from './staff-scheduling.component';

describe('StaffSchedulingComponent', () => {
  let component: StaffSchedulingComponent;
  let fixture: ComponentFixture<StaffSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffSchedulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
