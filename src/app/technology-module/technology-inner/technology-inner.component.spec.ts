import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyInnerComponent } from './technology-inner.component';

describe('TechnologyInnerComponent', () => {
  let component: TechnologyInnerComponent;
  let fixture: ComponentFixture<TechnologyInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
