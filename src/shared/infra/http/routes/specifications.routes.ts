import { Router } from "express"

import { CreateSpecificationContoller } from "@modules/cars/useCases/createSpecification/CreateSpecificationContoller";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationContoller();

specificationsRoutes.use(ensureAutheticated);
specificationsRoutes.post("/", createSpecificationContoller.handle);


export { specificationsRoutes }