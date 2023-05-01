import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopReauestacallbackComponent } from './desktop-reauestacallback.component';

describe('DesktopReauestacallbackComponent', () => {
  let component: DesktopReauestacallbackComponent;
  let fixture: ComponentFixture<DesktopReauestacallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopReauestacallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopReauestacallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
