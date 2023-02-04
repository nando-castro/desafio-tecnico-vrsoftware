import client from '../databases/database';
import { TypeEnrollment } from '../types/enrollmentTypes';

export async function createEnrollment(data: TypeEnrollment) {
    return await client.enrollment.create({ data });
}

export async function findByStudentId(studentId: number, courseId: number) {
    const rows = await client.enrollment.findFirst({ where: { studentId, courseId } });
    return rows;
}

export async function deleteEnrollmentId(id: number) {
    const rows = await client.enrollment.delete({ where: { id } });
    return rows;
}

export async function findEnrollmentById(id: number){
    const rows = await client.enrollment.findUnique({ where: { id } });
    return rows;
}

export async function getEnrollmentByIdCourse(courseId: number){
    const rows = await client.enrollment.findMany({ where: { courseId }});
    return rows;
}

export async function getEnrollmentByStudentId(studentId: number){
    const rows = await client.enrollment.findMany({ where: { studentId }});
    return rows;
}