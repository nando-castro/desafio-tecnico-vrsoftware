import client from '../databases/database';

export async function getStudents(){
    return await client.student.findMany();
}