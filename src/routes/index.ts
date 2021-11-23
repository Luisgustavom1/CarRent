import { Router } from "express";
import { authenticateUserRoute } from "./authenticate.routes";
import categorieRoutes from "./categories.routes";
import especificationRoutes from "./especification.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use("/categories", categorieRoutes);
router.use("/specification", especificationRoutes);
router.use("/user", usersRoutes)
router.use(authenticateUserRoute)

export default router;