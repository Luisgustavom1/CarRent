import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateEspecificationUseCase from './CreateEspecificationUseCase';

class CreateEspecificationController {
    async handle(req: Request, res: Response) {
        const { name, description } = req.body;
        
        const createEspecificationUseCase = container.resolve(CreateEspecificationUseCase)

        await createEspecificationUseCase.execute({ name, description });
    
        return res.status(201).send();
    }
};

export default CreateEspecificationController;