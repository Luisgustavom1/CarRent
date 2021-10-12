import { Request, Response } from 'express';
import CreateEspecificationUseCase from './CreateEspecificationUseCase';

class CreateEspecificationController {
    constructor(private createEspecificationUseCase: CreateEspecificationUseCase) {};

    handle(req: Request, res: Response) {
        const { name, description } = req.body;
    
        this.createEspecificationUseCase.execute({ name, description });
    
        return res.status(201).send();
    }
};

export default CreateEspecificationController;