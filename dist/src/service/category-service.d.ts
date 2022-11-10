import { Request, Response } from "express";
export declare class CategoryService {
    private categoryRepository;
    constructor();
    findAllCategory: (req: Request, res: Response) => Promise<any>;
    findOneByIdCategory: (req: Request, res: Response) => Promise<any>;
    saveCategory: (req: Request, res: Response) => Promise<void>;
    editCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<void>;
}
