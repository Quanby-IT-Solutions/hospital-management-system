import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersProgressComponent } from './learners-progress.component';

describe('LearnersProgressComponent', () => {
  let component: LearnersProgressComponent;
  let fixture: ComponentFixture<LearnersProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnersProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
