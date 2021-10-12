import { Router, Request, Response } from "express";
import { createEspecificationController } from "../modules/cars/useCases/createEspecification";

const especificationRoutes = Router();

especificationRoutes.post('/', (req: Request, res: Response) => {
    return createEspecificationController.handle(req, res);
})

export default especificationRoutes;