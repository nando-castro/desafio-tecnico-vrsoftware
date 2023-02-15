import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../services/student.service';
import { Student } from './../../Student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-student',
  templateUrl: './ui-student.component.html',
  styleUrls: ['./ui-student.component.css']
})
export class UiStudentComponent implements OnInit{

  student!: Student;
  courses: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudent(id).subscribe((i) => (this.student = i));

    this.studentService
      .getCourseEnrollStudents(id)
      .subscribe((course) => (this.courses = course));
  }

  async removeStudent(student: Student) {
    await this.studentService.remove(student.id!).subscribe(
      (res) => res,
      (err) => {
        if (err.status == 200) {
          alert('Aluno excluído com sucesso!');
          this.router.navigate(['/student']);
        }
        if (err.status == 401) {
          return alert(
            'O aluno está matriculado em curso! Por favor, primeiro remova a matricula do aluno!'
          );
        }
        if (err.status == 404) {
          return alert('Ocorreu um erro!');
        }
      }
    );
  }

  async removeEnrollment(id: number) {
    this.courses = this.courses.filter(
      (i: any, index: number) => this.courses[index].id !== id
    );
    await this.studentService.removeEnrollment(id).subscribe();
  }

}
