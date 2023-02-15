import { TypeStudent } from '../types/StudentTypes';
import * as studentRepository from '../repositories/studentRepository';
import * as enrollmentRepository from '../repositories/enrollmentRepository';
import { conflictError, notFoundError, unauthorizedError, unprocessableEntity } from '../utils/errorUtils';

export async function getStudents() {
    return await studentRepository.getStudents();
}

export async function getstudent(id: number) {
    const studentexists = await studentRepository.findById(id);
    if(!studentexists) throw notFoundError('Student not exists!');
    return studentexists;
  }

export async function createStudent(data: TypeStudent) {
    const studentExists = await studentRepository.findByName(data.name);
    if (data.name.length > 20) throw unprocessableEntity("Name must be less than 20 characters.")
    if (studentExists) throw conflictError("Student name exists!");
    await studentRepository.createStudent(data);
}

export async function updateStudent(id: number, data: TypeStudent) {
    const studentExists = await studentRepository.findById(id);
    if (!studentExists) throw notFoundError("Student not exists!");
    await studentRepository.updateStudent(id, data);
}

export async function deleteStudent(id: number) {
    const studentExists = await studentRepository.findById(id);
    if (!studentExists) throw notFoundError("Student not exists!");
    const enrolledStudent = await enrollmentRepository.getEnrollmentByStudentId(id);
    if (enrolledStudent.length > 0) throw unauthorizedError("The student is enrolled in a course.")
    await studentRepository.deleteStudent(id);
}

export async function getCoursesEnrollment(id: number){
    const studentExists = await studentRepository.findById(id);
    if (!studentExists) throw notFoundError("Student not exists!");
    const enrolledStudent = await enrollmentRepository.getEnrollmentByStudentId(id);
    return enrolledStudent;
}