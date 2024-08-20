import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEnrollmentComponent } from './patient-enrollment.component';

describe('PatientEnrollmentComponent', () => {
  let component: PatientEnrollmentComponent;
  let fixture: ComponentFixture<PatientEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
