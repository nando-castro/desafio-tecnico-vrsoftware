import { Request, Response } from "express";
import * as courseService from "../services/courseService";

export async function getCourses(req: Request, res: Response) {
  const data = await courseService.getCourses();

  res.status(200).send(data);
}

export async function createCourse(req: Request, res: Response){
  const data: {description: string; course_content: string} = req.body;
  await courseService.createCourse(data);
  res.status(201).send('Course Created');
}

export async function updateCourse(req: Request, res: Response){
  const { id } = req.params;
  const data: {description: string; course_content: string} = req.body;
  await courseService.updateCourse(Number(id), data);
  res.status(200).send('Course Updated');
}

export async function deleteCourse(req: Request, res: Response){
  const { id } = req.params;
  await courseService.deleteCourse(Number(id));
  res.status(200).send("Course Deleted");
}

export async function getStudentsEnrollment(req: Request, res: Response) {
  const { id } = req.params;
  const data = await courseService.getStudentsEnrollment(Number(id));
  res.status(200).send(data);
}
