import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import { TypeEnrollment } from "../types/enrollmentTypes";
import * as courseRepository from '../repositories/courseRepository';
import * as studentRepository from '../repositories/studentRepository';
import * as enrollmentRepository from '../repositories/enrollmentRepository';

export async function createEnrollment(data: TypeEnrollment) {
    const courseExists = await courseRepository.findCourseById(data.courseId);
    if (!courseExists) throw notFoundError("Course not exists.");
    const studenExists = await studentRepository.findById(data.studentId);
    if (!studenExists) throw notFoundError("Student not exists.");
    const studentEnrolled = await enrollmentRepository.findByStudentId(data.studentId, data.courseId);
    if (studentEnrolled) throw conflictError("Enrolled student.");
    await enrollmentRepository.createEnrollment(data);
}

export async function deleteEnrollment(id: number){
    const enrollmentExists = await enrollmentRepository.findEnrollmentById(id);
    if(!enrollmentExists) throw notFoundError("Enrollment not exists.");
    await enrollmentRepository.deleteEnrollmentId(id);
}
