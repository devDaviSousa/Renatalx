import { Specification } from "../entities/Specification";


interface ICreateSpeficication {
  name: string;
  description: string;
}

interface ISpecificationsRepository {

  create({ name, description }: ICreateSpeficication): void;

  findByDate(name: string): Specification;

}

export { ISpecificationsRepository, ICreateSpeficication }