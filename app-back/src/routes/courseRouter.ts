import { Router } from "express";
import { courseSchema } from "../schemas/courseSchema";
import * as courseController from "../controllers/courseController";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddlware";

const courseRouter = Router();

courseRouter.get("/courses", courseController.getCourses);
courseRouter.post("/course", schemaValidateMiddleware(courseSchema), courseController.createCourse);
courseRouter.put("/course/:id", schemaValidateMiddleware(courseSchema), courseController.updateCourse);

export { courseRouter };