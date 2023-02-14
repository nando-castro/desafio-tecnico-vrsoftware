import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Course';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseApiUrl}/courses`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseApiUrl}/course/${id}`);
  }

  getStudentsEnrollCourse(id: number) {
    return this.http.get(`${this.baseApiUrl}/course/${id}/students`);
  }

  createCourse(data: Course): Observable<FormData> {
    return this.http.post<FormData>(`${this.baseApiUrl}/course`, data);
  }

  remove(id: number){
    return this.http.delete<Course>(`${this.baseApiUrl}/course/${id}`);
  }

  removeEnrollment(id: number){
    return this.http.delete(`${this.baseApiUrl}/enrollment/${id}`);
  }
}

