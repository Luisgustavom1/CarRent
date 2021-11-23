import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string
}

interface IResponse {
    user: {
        email: string,
        name: string,
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new Error('Email or password incorrect!!')
        }

        const passwordMatch = await compare(password, user.password)
        
        if (!passwordMatch) {
            throw new Error('Email or password incorrect!!')
        }
        
        const token = await sign({}, '249d27c8d2af5035e81b6541bb69d137', {
            subject: user.id,
            expiresIn: '1d'
        })

        return {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        }
    }
}

export { AuthenticateUserUseCase }