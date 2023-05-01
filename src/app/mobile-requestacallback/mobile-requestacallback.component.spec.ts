import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRequestacallbackComponent } from './mobile-requestacallback.component';

describe('MobileRequestacallbackComponent', () => {
  let component: MobileRequestacallbackComponent;
  let fixture: ComponentFixture<MobileRequestacallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRequestacallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileRequestacallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
