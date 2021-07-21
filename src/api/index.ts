import { Router } from "express";
import sessions from "../api/sessions/routes";
import users from "../api/users/routes";
import comments from "../api/comments/routes";
import instructors from "../api/instructors/routes";
import promos from "../api/promos/routes";
import campusses from "./campusses/routes";
import auth from "./auth/routes";
import checkToken from "../middleware/checkToken";
const router = Router();

router.use("/users", checkToken, users);
router.use("/sessions", checkToken, sessions);
router.use("/comments", checkToken, comments);
router.use("/instructors", checkToken, instructors);
router.use("/promos", checkToken, promos);
router.use("/campusses", checkToken, campusses);
router.use("/auth", auth);

export default router;
