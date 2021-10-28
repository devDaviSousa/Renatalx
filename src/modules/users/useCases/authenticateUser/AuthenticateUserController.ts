import {Request,Response} from "express"
import { container } from "tsyringe"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


class AuthenticateUserController{


    async handle(request:Request, response:Response):Promise<Response>{

        const {email,password} = request.body;

        const authenticateUseCase = container.resolve(AuthenticateUserUseCase);

        const tokenInfo = await authenticateUseCase.execute({password,email});

        return response.json(tokenInfo)

    }

}
export {AuthenticateUserController}