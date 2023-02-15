import { EditStudentComponent } from './components/pages/edit-student/edit-student.component';
import { UiStudentComponent } from './components/ui-student/ui-student.component';
import { NewStudentComponent } from './components/pages/new-student/new-student.component';
import { EditCourseComponent } from './components/pages/edit-course/edit-course.component';
import { UiCourseComponent } from './components/ui-course/ui-course.component';
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
  { path: 'student/new', component: NewStudentComponent },
  { path: 'course/:id', component: UiCourseComponent },
  { path: 'student/:id', component: UiStudentComponent },
  { path: 'course/edit/:id', component: EditCourseComponent },
  { path: 'student/edit/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
