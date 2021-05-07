import { Router } from "express"
import { createSpecificationContoller } from "../modules/cars/useCases/createSpecification";


const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {

  return createSpecificationContoller.handle(request, response)

})


export { specificationsRoutes }