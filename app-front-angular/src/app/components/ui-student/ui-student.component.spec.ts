import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStudentComponent } from './ui-student.component';

describe('UiStudentComponent', () => {
  let component: UiStudentComponent;
  let fixture: ComponentFixture<UiStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
