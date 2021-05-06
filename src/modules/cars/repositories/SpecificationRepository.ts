import { Specification } from "../model/Specification";
import { IspecificationRepository, ICreateSpeficication } from "./ISpecificationRepository";



class SpecificationRepository implements IspecificationRepository {

  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }


  create({ name, description }: ICreateSpeficication): void {
    const specification = new Specification();

    Object.assign(specification, {
      name, description, created_at: new Date()
    });

    this.specifications.push(specification);
  }

  findByDate(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }

}

export { SpecificationRepository }