import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDirectoryComponent } from './resource-directory.component';

describe('ResourceDirectoryComponent', () => {
  let component: ResourceDirectoryComponent;
  let fixture: ComponentFixture<ResourceDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
