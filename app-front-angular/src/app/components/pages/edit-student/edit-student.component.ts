import { StudentService } from './../../../services/student.service';
import { Student } from './../../../Student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  student!: Student;
  btnText: string = 'Editar';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudent(id).subscribe((item) => {
      this.student = item;
    });
  }

  editHandler(student: Student) {
    const id = this.student.id;
    const data = {
      name: student.name,
    };

    this.studentService.update(id!, data).subscribe();

    this.router.navigate(['/student']);
  }
}
