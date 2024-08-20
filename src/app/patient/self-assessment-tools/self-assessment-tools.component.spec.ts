import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAssessmentToolsComponent } from './self-assessment-tools.component';

describe('SelfAssessmentToolsComponent', () => {
  let component: SelfAssessmentToolsComponent;
  let fixture: ComponentFixture<SelfAssessmentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfAssessmentToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfAssessmentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
