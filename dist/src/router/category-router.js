"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCategory = void 0;
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controller/category-controller"));
exports.routerCategory = (0, express_1.Router)();
exports.routerCategory.get('/categories', category_controller_1.default.getAllCategory);
exports.routerCategory.get('/createCategory/', category_controller_1.default.showFormCreateCategory);
exports.routerCategory.post('/createCategory/', category_controller_1.default.createCategory);
exports.routerCategory.get('/editCategory/:id', category_controller_1.default.showFormEditCategory);
exports.routerCategory.post('/editCategory/:id', category_controller_1.default.editCategory);
exports.routerCategory.get('/deleteCategory/:id', category_controller_1.default.showFormDeleteCategory);
exports.routerCategory.post('/deleteCategory/:id', category_controller_1.default.deleteCategory);
//# sourceMappingURL=category-router.js.map