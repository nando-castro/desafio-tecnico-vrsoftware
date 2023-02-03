import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export async function getStudents(req: Request, res: Response) {
    const data = await studentService.getStudents();
    res.status(200).send(data)
}