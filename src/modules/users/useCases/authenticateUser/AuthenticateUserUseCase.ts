import {compare} from "bcrypt"
import { inject, injectable } from "tsyringe";
import {sign} from "jsonwebtoken"
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResquest{
    email:string;
    password:string;
}

interface IResponse{
    user:{
        name:string;
        email:string;
    };
    token:string;
}


@injectable()
class AuthenticateUserUseCase{
    
    constructor(
    @inject("UsersRepository")
        private usersRepositoy:IUsersRepository
    ){}

    async execute({email,password}:IResquest):Promise<IResponse>{

        const user = await this.usersRepositoy.findByEmail(email);

        if(!user){
            throw new Error ("Email or password incorrect");
        };

        const passworMath = await compare(password,user.password);

        if(!passworMath){
            throw new Error ("Email or password incorrect");
        };

        const token = sign({},"f4cc08fa20e1167cba660c5fae1f2a1a",{
            subject:user.id,
            expiresIn:"1d"
        });

        const tokenReturn:IResponse = {
            token,
            user:{
                name:user.name,
                email:user.email
            }

        }

        return tokenReturn         

    }

}

export {AuthenticateUserUseCase}