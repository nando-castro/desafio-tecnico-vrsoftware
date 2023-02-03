import * as courseRepository from '../repositories/courseRepository'

export async function getCourses() {
    return await courseRepository.findCourses();
  }
  