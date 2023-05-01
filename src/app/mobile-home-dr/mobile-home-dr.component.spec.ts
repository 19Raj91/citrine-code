import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeDrComponent } from './mobile-home-dr.component';

describe('MobileHomeDrComponent', () => {
  let component: MobileHomeDrComponent;
  let fixture: ComponentFixture<MobileHomeDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileHomeDrComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MobileHomeDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
