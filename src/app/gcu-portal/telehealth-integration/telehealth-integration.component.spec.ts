import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelehealthIntegrationComponent } from './telehealth-integration.component';

describe('TelehealthIntegrationComponent', () => {
  let component: TelehealthIntegrationComponent;
  let fixture: ComponentFixture<TelehealthIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelehealthIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelehealthIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
