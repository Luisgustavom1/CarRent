import { Router } from "express";
import categorieRoutes from "./categories.routes";
import especificationRoutes from "./especification.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use("/categories", categorieRoutes);
router.use("/specification", especificationRoutes);
router.use("/user", usersRoutes)

export default router;