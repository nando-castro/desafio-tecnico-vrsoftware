import { Component, OnInit } from '@angular/core';
import { Student } from './../../../Student';
import { Router } from '@angular/router';
import { StudentService } from './../../../services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit{
  btnText = 'Cadastrar';

  constructor(private studentService: StudentService, private router: Router) {}

  async createHandler(student: Student) {
    const data = {
      name: student.name,
    };

    await this.studentService.createStudent(data).subscribe();

    this.router.navigate(['/student']);
  }

  ngOnInit(): void {}
}
