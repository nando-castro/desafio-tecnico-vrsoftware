import { Request, Response } from "express";
import * as courseService from "../services/courseService";

export async function getCourses(req: Request, res: Response) {
  const data = await courseService.getCourses();

  res.status(200).send(data);
}