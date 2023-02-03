import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export async function getStudents(req: Request, res: Response) {
    const data = await studentService.getStudents();
    res.status(200).send(data)
}

export async function createStudent(req: Request, res: Response) {
    const data: { name: string } = req.body;
    await studentService.createStudent(data);
    res.status(201).send("Student Created");
}

export async function updateStudent(req: Request, res: Response) {
    const data: { name: string } = req.body;
    const { id } = req.params;
    await studentService.updateStudent(Number(id),data);
    res.status(200).send("Student Updated");
}