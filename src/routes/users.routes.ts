import Routes from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import ensureAuthenticate from '../middlewares/ensureAuthenticate';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/upadateUserAvatar/UpdateUserAvatarController';

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const usersRoutes = Routes();

const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle)

usersRoutes.patch('/avatar', ensureAuthenticate, uploadAvatar.single('avatar'), updateUserAvatarController.handle)

export default usersRoutes;