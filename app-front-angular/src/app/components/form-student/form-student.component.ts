import { Student } from './../../Student';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Student>();
  @Input() btnText!: string;
  @Input() studentData: Student | null = null;

  studentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(this.studentData ? this.studentData.id : ''),
      name: new FormControl(this.studentData ? this.studentData.name : '', [Validators.required]),
    });
  }

  get name() {
    return this.studentForm.get('name')!;
  }

  submit() {
    if (this.studentForm.invalid){
      return;
    }
    console.log('enviou o forms!')

    this.onSubmit.emit(this.studentForm.value)
  }

}
