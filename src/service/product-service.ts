import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database product success!!!')
            this.productRepository = AppDataSource.getRepository(Product);
        })
    }

    findAll = async (req: Request, res: Response) => {
        let products = this.productRepository.query(`select * from product JOIN category  on product.idCategory = category.idC`);
        return products;
    }

    findOneById = async (id) => {
        return await this.productRepository.findOneById(id);
    }

    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if(files != null) {
            let product = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.save(product);
            res.redirect(301,'/products')
        }
    }

    editProduct = async (req: Request, res: Response) => {
        let id = + req.params.id
        let files = req.files;
        if(files != null) {
            let product = req.body;
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.update({id:id}, product);
            res.redirect(301,'/products')
        }
    }


    deleteProduct = async (req: Request, res: Response) => {
        let id = + req.params.id
        let product = await this.productRepository.findOneBy({id:id})
         if(product) {
             await this.productRepository.delete({id:id});
             res.redirect(301,'/products')
         }
    }

    searchProduct = async (name) => {
        return this.productRepository.query(`select * from product where name like '%${name}%'`)
    }
}

