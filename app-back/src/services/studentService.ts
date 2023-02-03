import * as studentRepository from '../repositories/studentRepository';

export async function getStudents(){
    return await studentRepository.getStudents();
}