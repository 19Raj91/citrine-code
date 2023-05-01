import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoscrollComponent } from './demoscroll.component';

describe('DemoscrollComponent', () => {
  let component: DemoscrollComponent;
  let fixture: ComponentFixture<DemoscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
