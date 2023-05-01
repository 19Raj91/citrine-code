import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAppointmentComponent } from './desktop-appointment.component';

describe('DesktopAppointmentComponent', () => {
  let component: DesktopAppointmentComponent;
  let fixture: ComponentFixture<DesktopAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
