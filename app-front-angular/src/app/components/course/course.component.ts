import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Course';
import { CourseService } from 'src/app/services/course.service';

import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  allCourses: Course[] = [];
  courses: Course[] = [];

  baseApiUrl = environment.baseApiUrl;

  constructor(private courseService: CourseService, private router:  Router) {}

  ngOnInit(): any {
    this.courseService.getCourses().subscribe((courses) => (this.courses = courses));
  }
}
