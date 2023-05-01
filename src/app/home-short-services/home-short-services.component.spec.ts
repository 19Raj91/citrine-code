import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShortServicesComponent } from './home-short-services.component';

describe('HomeShortServicesComponent', () => {
  let component: HomeShortServicesComponent;
  let fixture: ComponentFixture<HomeShortServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShortServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeShortServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
