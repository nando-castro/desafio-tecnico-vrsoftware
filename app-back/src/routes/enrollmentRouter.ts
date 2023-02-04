import { Router } from "express";
import { enrollmentSchema } from "../schemas/enrollmentSchema";
import * as enrollmentController from "../controllers/enrollmentController";
import { schemaValidateMiddleware } from "../middlewares/schemaValidateMiddlware";

const enrollmentRouter = Router();

enrollmentRouter.post("/enrollment", schemaValidateMiddleware(enrollmentSchema), enrollmentController.createEnrollment);
enrollmentRouter.delete("/enrollment/:id", enrollmentController.deleteEnrollment);

export { enrollmentRouter };