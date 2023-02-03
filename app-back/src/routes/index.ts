import { Router } from "express";
import { courseRouter } from "./courseRouter";
import { studentRouter } from "./studentRouter";

const router = Router();

router.use(courseRouter);
router.use(studentRouter);

export default router;