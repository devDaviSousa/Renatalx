import { Router } from "express"
import { CreateSpecificationContoller } from "../modules/cars/useCases/createSpecification/CreateSpecificationContoller";


const specificationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationContoller();

specificationsRoutes.post("/", createSpecificationContoller.handle);


export { specificationsRoutes }