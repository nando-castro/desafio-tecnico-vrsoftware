import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../services/student.service';
import { environment } from './../../../environments/environment';
import { Student } from './../../Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  allStudents: Student[] = [];
  students: Student[] = [];

  baseApiUrl = environment.baseApiUrl;

  constructor(private studentService: StudentService, private router:  Router) {}

  ngOnInit(): any {
    this.studentService.getStudents().subscribe((students) => (this.students = students));
  }
}
