
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAutheticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {

        const { sub: user_id } = verify(token, "f4cc08fa20e1167cba660c5fae1f2a1a") as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists", 401);
        }

        request.user = {
            id: user_id
        }

        next();

    } catch {
        throw new AppError("Invalid token", 401)

    }


}