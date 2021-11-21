import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from "../../repositories/ICategoriesRepositories";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
    ) {};

    async execute({ name, description }: IRequest) {
        const categoryAlreayExists = await this.categoriesRepository.findByName(name);
        
        if(categoryAlreayExists) {
            throw new Error('Category already exists!'); 
        };
    
        this.categoriesRepository.create({ name, description });
    };
};

export default CreateCategoryUseCase;