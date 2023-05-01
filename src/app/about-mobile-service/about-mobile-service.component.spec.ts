import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMobileServiceComponent } from './about-mobile-service.component';

describe('AboutMobileServiceComponent', () => {
  let component: AboutMobileServiceComponent;
  let fixture: ComponentFixture<AboutMobileServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMobileServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMobileServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
