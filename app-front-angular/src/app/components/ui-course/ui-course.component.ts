import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from './../../Course';

@Component({
  selector: 'app-ui-course',
  templateUrl: './ui-course.component.html',
  styleUrls: ['./ui-course.component.css'],
})
export class UiCourseComponent implements OnInit {
  course!: Course;
  students?: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourse(id).subscribe((i) => (this.course = i));

    this.courseService
      .getStudentsEnrollCourse(id)
      .subscribe((i) => (this.students = i));
  }

  async removeCourse(course: Course) {
    await this.courseService.remove(course.id!).subscribe(
      (res) => res,
      (err) => {
        if (err.status == 200) {
          alert('Curso excluído com sucesso!');
          this.router.navigate(['/course']);
        }
        if (err.status == 401) {
          return alert(
            'O curso possui alunos matriculados! Por favor, primeiro remova os alunos matriculados!'
          );
        }
        if (err.status == 404) {
          return alert('Ocorreu um erro!');
        }
      }
    );
  }
}
