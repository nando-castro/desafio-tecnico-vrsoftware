import client from '../databases/database';
import { TypeStudent } from '../types/StudentTypes';

export async function getStudents() {
    return await client.student.findMany();
}

export async function createStudent(data: TypeStudent) {
    const rows = await client.student.create({ data });
    return rows;
}

export async function findByName(name: string){
    const rows = await client.student.findFirst({ where: {
        name
    } });
    return rows;
}