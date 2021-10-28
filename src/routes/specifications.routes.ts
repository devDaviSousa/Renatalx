import { Router } from "express"
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationContoller } from "../modules/cars/useCases/createSpecification/CreateSpecificationContoller";


const specificationsRoutes = Router();

const createSpecificationContoller = new CreateSpecificationContoller();

specificationsRoutes.use(ensureAutheticated);
specificationsRoutes.post("/", createSpecificationContoller.handle);


export { specificationsRoutes }