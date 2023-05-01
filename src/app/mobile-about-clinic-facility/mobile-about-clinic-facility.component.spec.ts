import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutClinicFacilityComponent } from './mobile-about-clinic-facility.component';

describe('MobileAboutClinicFacilityComponent', () => {
  let component: MobileAboutClinicFacilityComponent;
  let fixture: ComponentFixture<MobileAboutClinicFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAboutClinicFacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAboutClinicFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
