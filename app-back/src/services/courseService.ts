import * as courseRepository from '../repositories/courseRepository'
import { TypeCourse } from '../types/CourseTypes';
import { conflictError, notFoundError, unprocessableEntity } from '../utils/errorUtils';

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