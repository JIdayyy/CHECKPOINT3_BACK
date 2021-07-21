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

router.use("/users", users);
router.use("/sessions", sessions);
router.use("/comments", comments);
router.use("/instructors", instructors);
router.use("/promos", promos);
router.use("/campusses", campusses);
router.use("/auth", auth);

export default router;
