import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController"
import { ImportCategoryUseCase } from "./ImportCategotyUseCase";

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export { importCategoryController }