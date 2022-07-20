import { Router } from "express";
import { CreateSpecificationContoller } from "@modules/cars/useCases/createSpecification/CreateSpecificationContoller";
import { ensureAutheticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationsRoutes = Router();
const createSpecificationContoller = new CreateSpecificationContoller();

specificationsRoutes.use(ensureAutheticated);
specificationsRoutes.post(
  "/",
  ensureAutheticated,
  ensureAdmin,
  createSpecificationContoller.handle
);

export { specificationsRoutes };
