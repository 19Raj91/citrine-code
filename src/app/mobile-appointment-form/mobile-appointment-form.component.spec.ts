import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppointmentFormComponent } from './mobile-appointment-form.component';

describe('MobileAppointmentFormComponent', () => {
  let component: MobileAppointmentFormComponent;
  let fixture: ComponentFixture<MobileAppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppointmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
