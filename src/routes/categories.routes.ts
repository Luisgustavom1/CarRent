import { Router } from "express";

import multer from 'multer';

import CreateCategoryController from '../modules/cars/useCases/createCategory/CreateCategoryController';
import ImportCategoryController from "../modules/cars/useCases/importCategory/ImportCategoryController";
import ListCategoryController from "../modules/cars/useCases/listCategories/listCategoryController";

const categorieRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoryController()
const importCategoryController = new ImportCategoryController()

categorieRoutes.post("/", createCategoryController.handle);

categorieRoutes.get('/', listCategoryController.handle);

categorieRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export default categorieRoutes;
