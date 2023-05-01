import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAbouteducationComponent } from './mobile-abouteducation.component';

describe('MobileAbouteducationComponent', () => {
  let component: MobileAbouteducationComponent;
  let fixture: ComponentFixture<MobileAbouteducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAbouteducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAbouteducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
