import { ICourse } from "../types/CourseTypes";
import joi from 'joi';

export const courseSchema = joi.object<ICourse>({
    description: joi.string().max(50).required().label("Enter a valid description."),
    course_content: joi.string().required().label("Please enter a valid content.")
});