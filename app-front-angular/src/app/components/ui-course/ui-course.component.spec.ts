import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCourseComponent } from './ui-course.component';

describe('UiCourseComponent', () => {
  let component: UiCourseComponent;
  let fixture: ComponentFixture<UiCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
