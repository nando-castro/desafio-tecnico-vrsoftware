import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseApiUrl}/courses`)
  }
}
