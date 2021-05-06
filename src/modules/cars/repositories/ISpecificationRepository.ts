import { Specification } from "../model/Specification";


interface ICreateSpeficication {
  name: string;
  description: string;
}

interface IspecificationRepository {

  create({ name, description }: ICreateSpeficication): void;

  findByDate(name: string): Specification;

}

export { IspecificationRepository, ICreateSpeficication }