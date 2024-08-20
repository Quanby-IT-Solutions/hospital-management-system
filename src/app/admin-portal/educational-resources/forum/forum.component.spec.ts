import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEducationalResourcesForumComponent } from './forum.component';

describe('AdminEducationalResourcesForumComponent', () => {
  let component: AdminEducationalResourcesForumComponent;
  let fixture: ComponentFixture<AdminEducationalResourcesForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEducationalResourcesForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEducationalResourcesForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
