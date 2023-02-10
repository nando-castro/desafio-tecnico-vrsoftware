import { NewCourseComponent } from './components/pages/new-course/new-course.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'student', component: StudentComponent },
  { path: 'course/new', component: NewCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
