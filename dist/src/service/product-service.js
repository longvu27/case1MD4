"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            let products = this.productRepository.query(`select * from product JOIN category  on product.idCategory = category.idC`);
            return products;
        };
        this.findOneById = async (id) => {
            return await this.productRepository.findOneById(id);
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.editProduct = async (req, res) => {
            let id = +req.params.id;
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/products');
            }
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productRepository.findOneBy({ id: id });
            if (product) {
                await this.productRepository.delete({ id: id });
                res.redirect(301, '/products');
            }
        };
        this.searchProduct = async (name) => {
            return this.productRepository.query(`select * from product where name like '%${name}%'`);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect database product success!!!');
            this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map