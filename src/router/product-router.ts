import {Router} from "express";
import productController from "../controller/product-controller";

export const routerProduct = Router();
routerProduct.get('/products', productController.getAll);

routerProduct.get('/createProduct/', productController.showFormCreate);
routerProduct.post('/createProduct/', productController.createProduct);

routerProduct.get('/edit/:id', productController.showFormEdit);
routerProduct.post('/edit/:id', productController.editProduct);

routerProduct.get('/delete/:id', productController.showFormDelete);
routerProduct.post('/delete/:id', productController.deleteProduct);

routerProduct.post('/products', productController.searchProduct);

