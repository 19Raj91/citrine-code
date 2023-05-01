import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesInnerComponent } from './services-inner.component';

describe('ServicesInnerComponent', () => {
  let component: ServicesInnerComponent;
  let fixture: ComponentFixture<ServicesInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
