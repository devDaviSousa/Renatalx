import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

describe("Authenticate User", () => {

    let authenticateUserUseCase: AuthenticateUserUseCase;
    let userRepositoryInMemory: UserRepositoryInMemory;
    let createUserUseCase: CreateUserUseCase;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            drive_license: "0012",
            email: "davi@gmail.com",
            password: "12345",
            name: "davi",
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token")

    });

    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "falese@gmail",
                password: "234"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect passwor", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                drive_license: "1233",
                email: "davi@gmail.com",
                password: "1234",
                name: "user"
            };

            await createUserUseCase.execute(user)
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "357788"
            })
        }).rejects.toBeInstanceOf(AppError)
    });

})