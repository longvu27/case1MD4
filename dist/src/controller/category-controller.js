"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../service/category-service");
class CategoryController {
    constructor() {
        this.getAllCategory = async (req, res) => {
            let category = await this.categoryService.findAllCategory(req, res);
            res.render('category/list', {
                listCategory: category
            });
        };
        this.showFormCreateCategory = async (req, res) => {
            res.render('category/create', {});
        };
        this.createCategory = async (req, res) => {
            await this.categoryService.saveCategory(req, res);
        };
        this.showFormEditCategory = async (req, res) => {
            let id = +req.params.id;
            if (!isNaN(id)) {
                let category = await this.categoryService.findOneByIdCategory(req, res);
                res.render('category/edit', {
                    category: category
                });
            }
        };
        this.editCategory = async (req, res) => {
            await this.categoryService.editCategory(req, res);
        };
        this.showFormDeleteCategory = async (req, res) => {
            let id = +req.params.id;
            if ((id)) {
                let category = await this.categoryService.findOneByIdCategory(req, res);
                res.render('category/delete', {
                    category: category
                });
            }
        };
        this.deleteCategory = async (req, res) => {
            await this.categoryService.deleteCategory(req, res);
        };
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map