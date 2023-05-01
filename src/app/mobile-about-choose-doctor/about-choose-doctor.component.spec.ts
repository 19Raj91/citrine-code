import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChooseDoctorComponent } from './about-choose-doctor.component';

describe('AboutChooseDoctorComponent', () => {
  let component: AboutChooseDoctorComponent;
  let fixture: ComponentFixture<AboutChooseDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutChooseDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutChooseDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
