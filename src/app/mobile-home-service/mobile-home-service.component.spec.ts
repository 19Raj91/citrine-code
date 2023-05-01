import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeServiceComponent } from './mobile-home-service.component';

describe('MobileHomeServiceComponent', () => {
  let component: MobileHomeServiceComponent;
  let fixture: ComponentFixture<MobileHomeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
