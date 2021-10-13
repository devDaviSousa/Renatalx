import { Specification } from "../entities/Specification";


interface ICreateSpeficication {
  name: string;
  description: string;
}

interface IspecificationRepository {

  create({ name, description }: ICreateSpeficication): void;

  findByDate(name: string): Specification;

}

export { IspecificationRepository, ICreateSpeficication }