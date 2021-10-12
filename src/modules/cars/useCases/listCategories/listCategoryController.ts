import { Request, Response } from "express";
import ListCategoriesUseCase from "./listCategoriesUseCase";

class ListCategoryController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {};

    handle(req: Request, res: Response): Response {
        const allCategories = this.listCategoriesUseCase.execute();

        return res.json(allCategories);
    };
}

export default ListCategoryController;