import { getRepository, Repository } from "typeorm";
import { IUserRepositoryDTO } from "../../DTOS/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, password, driver_license, email }: IUserRepositoryDTO): Promise<void> {        
        const user = this.repository.create({ name, password, driver_license, email })
        
        await this.repository.save(user)
    }

    async findByEmail(email: string) {
        const user = await this.repository.findOne({ email });

        return user
    }

    async findById(id: string) {
        const user = await this.repository.findOne( id );

        return user
    }
}

export { UsersRepository }