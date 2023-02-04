import { Router } from "express";
import { courseRouter } from "./courseRouter";
import { enrollmentRouter } from "./enrollmentRouter";
import { studentRouter } from "./studentRouter";

const router = Router();

router.use(courseRouter);
router.use(studentRouter);
router.use(enrollmentRouter);

export default router;