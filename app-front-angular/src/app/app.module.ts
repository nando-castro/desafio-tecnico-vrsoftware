import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { FormCourseComponent } from './components/form-course/form-course.component';
import { NewCourseComponent } from './components/pages/new-course/new-course.component';
import { UiCourseComponent } from './components/ui-course/ui-course.component';
import { EditCourseComponent } from './components/pages/edit-course/edit-course.component';
import { NewStudentComponent } from './components/pages/new-student/new-student.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { UiStudentComponent } from './components/ui-student/ui-student.component';
import { EditStudentComponent } from './components/pages/edit-student/edit-student.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, CourseComponent, StudentComponent, FormCourseComponent, NewCourseComponent, UiCourseComponent, EditCourseComponent, NewStudentComponent, FormStudentComponent, UiStudentComponent, EditStudentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
