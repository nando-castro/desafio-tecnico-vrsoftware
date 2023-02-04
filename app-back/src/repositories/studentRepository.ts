import client from '../databases/database';
import { TypeStudent } from '../types/StudentTypes';

export async function getStudents() {
    return await client.student.findMany();
}

export async function createStudent(data: TypeStudent) {
    const rows = await client.student.create({ data });
    return rows;
}

export async function findByName(name: string) {
    const rows = await client.student.findFirst({
        where: {
            name
        }
    });
    return rows;
}

export async function findById(id: number) {
    const rows = await client.student.findUnique({ where: { id } })
    return rows;
}

export async function updateStudent(id: number, data: TypeStudent) {
    const rows = await client.student.update({
        where: { id },
        data
    });
    return rows;
}

export async function deleteStudent(id: number) {
    const rows = await client.student.delete({
        where: { id }
    });
    return rows;
}