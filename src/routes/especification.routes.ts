import { Router } from "express";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

import CreateEspecificationController from '../modules/cars/useCases/createEspecification/createEspecificationController'

const especificationRoutes = Router();

const createEspecificationController = new CreateEspecificationController()

especificationRoutes.use(ensureAuthenticate)
especificationRoutes.post('/', createEspecificationController.handle)

export default especificationRoutes;