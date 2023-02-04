import { IEnrollment } from '../types/enrollmentTypes';
import joi from 'joi';

export const enrollmentSchema = joi.object<IEnrollment>({
    studentId: joi.number().required().label("Please enter a valid id."),
    courseId: joi.number().required().label("Please enter a valid id.")
});