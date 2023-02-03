import { IStudentCourse } from '../types/StudentCourseTypes';
import joi from 'joi';

export const studentCourseSchema = joi.object<IStudentCourse>({
    studentId: joi.number().required().label("Please enter a valid id."),
    courseId: joi.number().required().label("Please enter a valid id.")
});