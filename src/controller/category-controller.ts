import {CategoryService} from "../service/category-service";
import {Request, Response} from "express";
import {ProductController} from "./product-controller";

export class CategoryController {
    private categoryService: CategoryService

    constructor() {
        this.categoryService = new CategoryService();
    }

    getAllCategory = async (req: Request, res: Response) => {
        let category = await this.categoryService.findAllCategory(req, res);
        res.render('category/list', {
            listCategory: category
        })
    }

    showFormCreateCategory = async (req: Request, res: Response) => {
        res.render('category/create', {})
    }

    createCategory = async (req: Request, res: Response) => {
        await this.categoryService.saveCategory(req, res);
    }

    showFormEditCategory = async (req: Request, res: Response) => {
        let id = +req.params.id
        if (!isNaN(id)) {
            let category = await this.categoryService.findOneByIdCategory(req, res);
            res.render('category/edit', {
                category: category
            });
        }
    }

    editCategory = async (req: Request, res: Response) => {
        await this.categoryService.editCategory(req, res);
    }

    showFormDeleteCategory = async (req: Request, res: Response) => {
        let id = +req.params.id;
        if((id)) {
            let category = await this.categoryService.findOneByIdCategory(req,res);
            res.render('category/delete', {
                category: category
            })
        }
    }

    deleteCategory = async (req: Request, res: Response) => {
        await this.categoryService.deleteCategory(req, res);
    }
}

export default new CategoryController();