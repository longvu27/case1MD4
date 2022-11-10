import {AppDataSource} from "../data-source";
import {Category} from "../model/category";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class CategoryService {
    private categoryRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database category success!!!')
            this.categoryRepository = connection.getRepository(Category);
        })
    }

    findAllCategory = async (req: Request, res: Response) => {
        let category = this.categoryRepository.find();
        return category;
    }

    findOneByIdCategory = async (req: Request, res: Response) => {
        let id = +req.params.id
        return await this.categoryRepository.findOneBy({id: id});
    }

    saveCategory = async (req: Request, res: Response) => {
        let category = req.body;
        await this.categoryRepository.save(category);
        res.redirect(301, '/categories')
    }

    editCategory = async (req: Request, res: Response) => {
        let id = +req.params.id
        let category = req.body;
        await this.categoryRepository.update({id: id}, category);
        res.redirect(301, '/categories')
    }

    deleteCategory = async (req: Request, res: Response) => {
        let id = + req.params.id
        let category = await this.categoryRepository.findOneBy({id:id})
        if(category) {
            await this.categoryRepository.delete({id:id});
            res.redirect(301,'/categories')
        }
    }
}
