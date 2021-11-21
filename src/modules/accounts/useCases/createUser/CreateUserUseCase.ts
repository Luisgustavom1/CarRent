import { inject, injectable } from "tsyringe";

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IUserRepositoryDTO } from '../../DTOS/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, password, driver_license, email }: IUserRepositoryDTO) {
        await this.usersRepository.create({ name, password, driver_license, email })
    }
}

export { CreateUserUseCase }