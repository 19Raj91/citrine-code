import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAboutChooseDrComponent } from './desktop-about-choose-dr.component';

describe('DesktopAboutChooseDrComponent', () => {
  let component: DesktopAboutChooseDrComponent;
  let fixture: ComponentFixture<DesktopAboutChooseDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopAboutChooseDrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopAboutChooseDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
