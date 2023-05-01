import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTestimonialComponent } from './desktop-testimonial.component';

describe('DesktopTestimonialComponent', () => {
  let component: DesktopTestimonialComponent;
  let fixture: ComponentFixture<DesktopTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
