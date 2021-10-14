import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpeficication } from "../ISpecificationsRepository";

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