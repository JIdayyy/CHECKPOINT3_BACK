import { Router } from "express";
import controller from "./controller";
const router = Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/refresh", controller.refresh);

export default router;
