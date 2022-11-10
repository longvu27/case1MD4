"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAllCategory = async (req, res) => {
            let category = this.categoryRepository.find();
            return category;
        };
        this.findOneByIdCategory = async (req, res) => {
            let id = +req.params.id;
            return await this.categoryRepository.findOneBy({ id: id });
        };
        this.saveCategory = async (req, res) => {
            let category = req.body;
            await this.categoryRepository.save(category);
            res.redirect(301, '/categories');
        };
        this.editCategory = async (req, res) => {
            let id = +req.params.id;
            let category = req.body;
            await this.categoryRepository.update({ id: id }, category);
            res.redirect(301, '/categories');
        };
        this.deleteCategory = async (req, res) => {
            let id = +req.params.id;
            let category = await this.categoryRepository.findOneBy({ id: id });
            if (category) {
                await this.categoryRepository.delete({ id: id });
                res.redirect(301, '/categories');
            }
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect database category success!!!');
            this.categoryRepository = connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map