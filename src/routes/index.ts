import { Router } from "express";
import categorieRoutes from "./categories.routes";
import especificationRoutes from "./especification.routes";

const router = Router();

router.use("/categories", categorieRoutes);
router.use("/specification", especificationRoutes);

export default router;