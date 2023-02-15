import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css'],
})
export class FormCourseComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Course>();
  @Input() btnText!: string;
  @Input() courseData: Course | null = null;

  courseForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      id: new FormControl(this.courseData ? this.courseData.id : ''),
      description: new FormControl(this.courseData ? this.courseData.description : '', [Validators.required]),
      course_content: new FormControl(this.courseData ? this.courseData.course_content : '', [Validators.required]),
    });
  }

  get description() {
    return this.courseForm.get('description')!;
  }

  get courseContent() {
    return this.courseForm.get('course_content')!;
  }

  submit() {
    if (this.courseForm.invalid){
      return;
    }
    console.log('enviou o forms!')

    this.onSubmit.emit(this.courseForm.value)
  }
}
