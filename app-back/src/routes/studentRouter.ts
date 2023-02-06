import { Router } from "express";
import { studentSchema } from "../schemas/studentSchema";
import * as studentController from "../controllers/studentController";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddlware";

const studentRouter = Router();

studentRouter.get("/students", studentController.getStudents);
studentRouter.post("/student", schemaValidateMiddleware(studentSchema), studentController.createStudent);
studentRouter.put("/student/:id", schemaValidateMiddleware(studentSchema), studentController.updateStudent);
studentRouter.delete("/student/:id", studentController.deleteStudent);

studentRouter.get("/student/:id/courses", studentController.getCoursesEnrollment);

export { studentRouter };