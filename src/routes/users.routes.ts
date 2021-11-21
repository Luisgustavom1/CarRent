import Routes from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRoutes = Routes();

const createUsersController = new CreateUserController();

usersRoutes.post('/', createUsersController.handle)

export default usersRoutes;