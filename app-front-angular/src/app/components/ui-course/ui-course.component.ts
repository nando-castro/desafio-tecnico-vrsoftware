import { Course } from './../../Course';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-ui-course',
  templateUrl: './ui-course.component.html',
  styleUrls: ['./ui-course.component.css'],
})
export class UiCourseComponent implements OnInit {
  course?: Course;
  students?: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourse(id).subscribe(i => this.course = i)

    this.courseService.getStudentsEnrollCourse(id).subscribe(i => this.students = i)
  }
}
