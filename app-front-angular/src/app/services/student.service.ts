import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './../Student';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService{
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseApiUrl}/students`);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseApiUrl}/student/${id}`);
  }

  getCourseEnrollStudents(id: number) {
    return this.http.get(`${this.baseApiUrl}/student/${id}/courses`);
  }

  createStudent(data: Student): Observable<FormData> {
    return this.http.post<FormData>(`${this.baseApiUrl}/student`, data);
  }

  remove(id: number) {
    return this.http.delete<Student>(`${this.baseApiUrl}/student/${id}`);
  }

  removeEnrollment(id: number) {
    return this.http.delete(`${this.baseApiUrl}/enrollment/${id}`);
  }

  update(id: number, data: Student): Observable<FormData> {
    return this.http.put<FormData>(`${this.baseApiUrl}/student/${id}`, data);
  }
}
