import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import ListCategoriesUseCase from "./listCategoriesUseCase";
import ListCategoryController from "./listCategoryController";

const categoriesRepository = null;

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoriesUseCase);

export { listCategoryController };