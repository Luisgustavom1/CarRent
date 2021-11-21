import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepositories'
import CategoriesRepository from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { IEspecificationRepository } from '../../modules/cars/repositories/IEspecificationRepository'
import EspecificationRepository from '../../modules/cars/repositories/implementations/EspecificationRepository'
import { UsersRepository } from "../../modules/accounts/repositories/implementantions/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

// Passar a onde tem tudo - ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<IEspecificationRepository>(
    "EspecificationRepository",
    EspecificationRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)