import { TypeStudent } from '../types/StudentTypes';
import * as studentRepository from '../repositories/studentRepository';
import { conflictError, unprocessableEntity } from '../utils/errorUtils';

export async function getStudents() {
    return await studentRepository.getStudents();
}

export async function createStudent(data: TypeStudent) {
    const studentExists = await studentRepository.findByName(data.name);
    if (data.name.length > 20) throw unprocessableEntity("Name must be less than 20 characters.")
    if (studentExists) throw conflictError("Student name exists!");
    await studentRepository.createStudent(data);
}