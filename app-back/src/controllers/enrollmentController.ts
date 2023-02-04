import { Request, Response } from "express";
import * as enrollmentService from "../services/enrollmentService";

export async function createEnrollment(req: Request, res: Response) {
    const data: { courseId: number, studentId: number } = req.body;
    await enrollmentService.createEnrollment(data);
    res.status(200).send("Enrollment Created");
}

export async function deleteEnrollment(req: Request, res: Response) {
    const { id } = req.params;
    await enrollmentService.deleteEnrollment(Number(id));
    res.status(200).send("Enrollment Deleted");
}