import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepositories'
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository'
import { IEspecificationRepository } from '../../repositories/IEspecificationRepository'
import EspecificationRepository from '../../repositories/implementations/EspecificationRepository'

// Passar a onde tem tudo - ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<IEspecificationRepository>(
    "EspecificationRepository",
    EspecificationRepository
)