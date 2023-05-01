import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicImagesComponent } from './clinic-images.component';

describe('ClinicImagesComponent', () => {
  let component: ClinicImagesComponent;
  let fixture: ComponentFixture<ClinicImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
