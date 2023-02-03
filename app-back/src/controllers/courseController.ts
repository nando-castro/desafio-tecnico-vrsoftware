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