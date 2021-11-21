import { Router } from "express";

import CreateEspecificationController from '../modules/cars/useCases/createEspecification/createEspecificationController'

const especificationRoutes = Router();

const createEspecificationController = new CreateEspecificationController()

especificationRoutes.post('/', createEspecificationController.handle)

export default especificationRoutes;