import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErrors } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementantions/UsersRepository";

interface IPayLoad {
    sub: string
}

export default function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        throw new AppErrors('Is missing authorization!!', 401)
    }

    const [, token] = authorization.split(" ");

    try {
        const { sub: user_id } = verify(token, '249d27c8d2af5035e81b6541bb69d137') as IPayLoad;

        const usersRepository = new UsersRepository()

        const user = usersRepository.findById(user_id)

        if (!user) {
            throw new AppErrors("User does not exists!!", 401)
        }

        request.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppErrors('Token is invalid!!', 401)
    }
}