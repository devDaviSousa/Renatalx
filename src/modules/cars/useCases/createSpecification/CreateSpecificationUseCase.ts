import { IspecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {

  constructor(private specificationRepository: IspecificationRepository) {

  }

  execute({ name, description }: IRequest): void {

    const specificationAlreadyExists = this.specificationRepository.findByDate(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationRepository.create({
      name, description
    });

  }
}

export { CreateSpecificationUseCase }