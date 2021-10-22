import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, drive_license } = request.body;
    const userRepository = container.resolve(CreateUserUseCase);

    userRepository.execute({ name, username, email, password, drive_license });

    return response.status(201).send();
  }
}

export { CreateUserController }