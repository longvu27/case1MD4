"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProduct = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product-controller"));
exports.routerProduct = (0, express_1.Router)();
exports.routerProduct.get('/products', product_controller_1.default.getAll);
exports.routerProduct.get('/createProduct/', product_controller_1.default.showFormCreate);
exports.routerProduct.post('/createProduct/', product_controller_1.default.createProduct);
exports.routerProduct.get('/edit/:id', product_controller_1.default.showFormEdit);
exports.routerProduct.post('/edit/:id', product_controller_1.default.editProduct);
exports.routerProduct.get('/delete/:id', product_controller_1.default.showFormDelete);
exports.routerProduct.post('/delete/:id', product_controller_1.default.deleteProduct);
exports.routerProduct.post('/products', product_controller_1.default.searchProduct);
//# sourceMappingURL=product-router.js.map