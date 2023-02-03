import { IStudent } from "../types/StudentTypes";
import joi from 'joi';

export const studentSchema = joi.object<IStudent>({
    name: joi.string().max(20).required().label("Please enter a valid name (Max: 20 characters)."),
});