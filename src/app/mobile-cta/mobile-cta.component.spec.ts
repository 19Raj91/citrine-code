import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCtaComponent } from './mobile-cta.component';

describe('MobileCtaComponent', () => {
  let component: MobileCtaComponent;
  let fixture: ComponentFixture<MobileCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
