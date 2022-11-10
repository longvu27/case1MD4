import { Request, Response } from "express";
export declare class CategoryController {
    private categoryService;
    constructor();
    getAllCategory: (req: Request, res: Response) => Promise<void>;
    showFormCreateCategory: (req: Request, res: Response) => Promise<void>;
    createCategory: (req: Request, res: Response) => Promise<void>;
    showFormEditCategory: (req: Request, res: Response) => Promise<void>;
    editCategory: (req: Request, res: Response) => Promise<void>;
    showFormDeleteCategory: (req: Request, res: Response) => Promise<void>;
    deleteCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
