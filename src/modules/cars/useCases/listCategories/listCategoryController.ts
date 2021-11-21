import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCategoriesUseCase from "./listCategoriesUseCase";

class ListCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

        const allCategories = await listCategoriesUseCase.execute();
        
        return res.json(allCategories);
    };
}

export default ListCategoryController;