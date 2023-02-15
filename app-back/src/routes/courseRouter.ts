import { Router } from "express";
import { courseSchema } from "../schemas/courseSchema";
import * as courseController from "../controllers/courseController";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddlware";

const courseRouter = Router();

courseRouter.get("/courses", courseController.getCourses);
courseRouter.get("/course/:id", courseController.getCourse);
courseRouter.post("/course", schemaValidateMiddleware(courseSchema), courseController.createCourse);
courseRouter.put("/course/:id", schemaValidateMiddleware(courseSchema), courseController.updateCourse);
courseRouter.delete("/course/:id", courseController.deleteCourse);

courseRouter.get("/course/:id/students", courseController.getStudentsEnrollment);


export { courseRouter };