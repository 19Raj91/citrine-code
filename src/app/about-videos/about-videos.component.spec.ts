import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVideosComponent } from './about-videos.component';

describe('AboutVideosComponent', () => {
  let component: AboutVideosComponent;
  let fixture: ComponentFixture<AboutVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
