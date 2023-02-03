import client from '../databases/database';
import { TypeCourse } from '../types/CourseTypes'

export async function createCourse(data: TypeCourse) {
    await client.course.create({ data });
}

export async function findCourses() {
    return await client.course.findMany();
}

export async function findCourseByDescription(description: string) {
    const rows = await client.course.findFirst({
        where: {
            description
        }
    });
    return rows;
}