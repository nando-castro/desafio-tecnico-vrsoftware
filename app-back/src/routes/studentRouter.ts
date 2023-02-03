import { Router } from "express";
import * as studentController from "../controllers/studentController";

const studentRouter = Router();

studentRouter.get("/students", studentController.getStudents);

export { studentRouter };