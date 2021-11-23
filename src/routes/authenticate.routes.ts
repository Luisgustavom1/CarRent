import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserRoute = Router();

const authenticateUserController = new AuthenticateUserController()

authenticateUserRoute.post('/sessions', authenticateUserController.handle)

export { authenticateUserRoute }