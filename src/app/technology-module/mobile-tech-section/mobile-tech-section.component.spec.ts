import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTechSectionComponent } from './mobile-tech-section.component';

describe('MobileTechSectionComponent', () => {
  let component: MobileTechSectionComponent;
  let fixture: ComponentFixture<MobileTechSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTechSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTechSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
