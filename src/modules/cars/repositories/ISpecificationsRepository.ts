import { Specification } from "../entities/Specification";


interface ICreateSpeficication {
  name: string;
  description: string;
}

interface ISpecificationsRepository {

  create({ name, description }: ICreateSpeficication): Promise<void>;

  findByDate(name: string): Promise<Specification>;

}

export { ISpecificationsRepository, ICreateSpeficication }