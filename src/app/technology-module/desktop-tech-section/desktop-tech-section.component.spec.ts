import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTechSectionComponent } from './desktop-tech-section.component';

describe('DesktopTechSectionComponent', () => {
  let component: DesktopTechSectionComponent;
  let fixture: ComponentFixture<DesktopTechSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopTechSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopTechSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
