import client from '../databases/database';
import { TypeEnrollment } from '../types/enrollmentTypes';

export async function createEnrollment(data: TypeEnrollment) {
    return await client.enrollment.create({ data });
}

export async function findByStudentId(studentId: number, courseId: number){
    const rows = await client.enrollment.findFirst({ where: { studentId, courseId } });
    return rows;
}