import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationContoller } from "./CreateSpecificationContoller";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationContoller = new CreateSpecificationContoller(createSpecificationUseCase)

export { createSpecificationContoller }