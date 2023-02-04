import { TypeCourse } from '../types/CourseTypes';
import * as courseRepository from '../repositories/courseRepository'
import * as enrollmentRepository from '../repositories/enrollmentRepository';
import { conflictError, notFoundError, unauthorizedError, unprocessableEntity } from '../utils/errorUtils';

export async function getCourses() {
  return await courseRepository.findCourses();
}

export async function createCourse(data: TypeCourse){
  const courseExists = await courseRepository.findCourseByDescription(data.description);
  if(data.description.length > 50) throw unprocessableEntity("Description must be less than 50 characters.")
  if(courseExists) throw conflictError("Course exists!");
  
  await courseRepository.createCourse(data);
}

export async function updateCourse(id: number, data: TypeCourse){
  const courseExists = await courseRepository.findCourseById(id);
  if(!courseExists) throw notFoundError("Course not exists");
  await courseRepository.updateCourse(id, data);
}

export async function deleteCourse(id:number){
  const courseExists = await courseRepository.findCourseById(id);
  if(!courseExists) throw notFoundError("Course not exists");
  const emptyCourse = await enrollmentRepository.getEnrollmentByIdCourse(id);
    if(emptyCourse) throw unauthorizedError("The course has enrolled students.")
  await courseRepository.deleteCourse(id);
}