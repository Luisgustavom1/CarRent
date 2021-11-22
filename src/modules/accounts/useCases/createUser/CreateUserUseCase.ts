import { inject, injectable } from "tsyringe";
import bcrypt from 'bcryptjs';

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IUserRepositoryDTO } from '../../DTOS/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({ name, password, driver_license, email }: IUserRepositoryDTO) {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
        
        if (emailAlreadyExists) {
            throw new Error('Email already exists!!')
        }

        const passwordHash = await bcrypt.hash(password, 8)

        await this.usersRepository.create({ 
            name, 
            password: passwordHash, 
            driver_license, 
            email 
        })
    }
}

export { CreateUserUseCase }