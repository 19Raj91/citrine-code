import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeTestimonialComponent } from './mobile-home-testimonial.component';

describe('MobileHomeTestimonialComponent', () => {
  let component: MobileHomeTestimonialComponent;
  let fixture: ComponentFixture<MobileHomeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
