import { IUserRepositoryDTO } from "../DTOS/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create(data: IUserRepositoryDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository }