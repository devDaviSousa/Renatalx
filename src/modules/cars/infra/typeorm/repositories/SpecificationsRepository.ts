import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpeficication, ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";



class SpecificationsRepository implements ISpecificationsRepository {

  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: ICreateSpeficication): Promise<void> {
    const specification = this.repository.create({ description, name });

    await this.repository.save(specification);
  }

  async findByDate(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name })

    return specification;

  }
}
export { SpecificationsRepository }