import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNevigationComponent } from './mobile-nevigation.component';

describe('MobileNevigationComponent', () => {
  let component: MobileNevigationComponent;
  let fixture: ComponentFixture<MobileNevigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNevigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
