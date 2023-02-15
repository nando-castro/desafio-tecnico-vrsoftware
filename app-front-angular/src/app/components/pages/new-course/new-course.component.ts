import { CourseService } from 'src/app/services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  btnText = 'Cadastrar';

  constructor(private courseService: CourseService, private router: Router) {}

  async createHandler(course: Course) {
    const data = {
      description: course.description,
      course_content: course.course_content,
    };

    await this.courseService.createCourse(data).subscribe();

    this.router.navigate(['/course']);
  }

  ngOnInit(): void {}
}
