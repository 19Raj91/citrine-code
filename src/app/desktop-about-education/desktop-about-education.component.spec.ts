import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAboutEducationComponent } from './desktop-about-education.component';

describe('DesktopAboutEducationComponent', () => {
  let component: DesktopAboutEducationComponent;
  let fixture: ComponentFixture<DesktopAboutEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopAboutEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAboutEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
