import { Router } from "express";
import { courseRouter } from "./courseRouter";

const router = Router();

router.use(courseRouter);

export default router;