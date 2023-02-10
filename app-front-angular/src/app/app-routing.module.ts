import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
