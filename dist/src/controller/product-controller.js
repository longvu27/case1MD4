"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            let category = await this.categoryService.findAllCategory(req, res);
            res.render('product/create', {
                listCategory: category
            });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            let id = +req.params.id;
            if (!isNaN(id)) {
                let product = await this.productService.findOneById(req, res);
                let category = await this.categoryService.findAllCategory(req, res);
                res.render('product/edit', {
                    product: product, listCategory: category
                });
            }
        };
        this.editProduct = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.showFormDelete = async (req, res) => {
            let id = +req.params.id;
            if ((id)) {
                let product = await this.productService.findOneById(req, res);
                res.render('product/delete', {
                    product: product
                });
            }
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.searchProduct = async (req, res) => {
            let products = await this.productService.searchProduct(req.body.name);
            res.render('product/search', {
                listProduct: products
            });
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map