import {Router} from "express";
import categoryController from "../controller/category-controller";


export const routerCategory = Router();
routerCategory.get('/categories', categoryController.getAllCategory);

routerCategory.get('/createCategory/', categoryController.showFormCreateCategory);
routerCategory.post('/createCategory/',categoryController.createCategory);

routerCategory.get('/editCategory/:id', categoryController.showFormEditCategory);
routerCategory.post('/editCategory/:id', categoryController.editCategory);

routerCategory.get('/deleteCategory/:id', categoryController.showFormDeleteCategory);
routerCategory.post('/deleteCategory/:id', categoryController.deleteCategory);

