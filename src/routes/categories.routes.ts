import { Request, Response, Router } from "express";

import multer from 'multer';

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categorieRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categorieRoutes.post("/", (req: Request, res: Response) => {
    return createCategoryController.handle(req, res);
});

categorieRoutes.get('/', (req: Request, res: Response) => {
    return listCategoryController.handle(req, res);
});

categorieRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
})

export default categorieRoutes;
