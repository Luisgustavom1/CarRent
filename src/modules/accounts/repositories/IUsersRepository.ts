import { IUserRepositoryDTO } from "../DTOS/ICreateUserDTO";

interface IUsersRepository {
    create(data: IUserRepositoryDTO): Promise<void>
}

export { IUsersRepository }