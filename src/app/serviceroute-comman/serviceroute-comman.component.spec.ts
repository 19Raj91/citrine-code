import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerouteCommanComponent } from './serviceroute-comman.component';

describe('ServicerouteCommanComponent', () => {
  let component: ServicerouteCommanComponent;
  let fixture: ComponentFixture<ServicerouteCommanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerouteCommanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicerouteCommanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
