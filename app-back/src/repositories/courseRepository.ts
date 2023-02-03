import client from '../databases/database';

export async function findCourses(){
    return await client.course.findMany();
}