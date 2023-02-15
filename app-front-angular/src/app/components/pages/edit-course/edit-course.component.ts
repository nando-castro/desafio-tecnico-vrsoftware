import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from 'src/app/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  course!: Course;
  btnText: string = 'Editar';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourse(id).subscribe((item) => {
      this.course = item;
    });
  }

  editHandler(course: Course) {
    const id = this.course.id;
    const data = {
      description: course.description,
      course_content: course.course_content,
    };

    this.courseService.update(id!, data).subscribe();

    this.router.navigate(['/course']);
  }
}
