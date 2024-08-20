import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerOpportunitiesComponent } from './volunteer-opportunities.component';

describe('VolunteerOpportunitiesComponent', () => {
  let component: VolunteerOpportunitiesComponent;
  let fixture: ComponentFixture<VolunteerOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerOpportunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
