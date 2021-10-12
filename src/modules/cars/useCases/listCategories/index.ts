import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import ListCategoriesUseCase from "./listCategoriesUseCase";
import ListCategoryController from "./listCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoriesUseCase);

export { listCategoryController };