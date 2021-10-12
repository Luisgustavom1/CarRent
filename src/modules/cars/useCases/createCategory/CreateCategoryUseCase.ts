import { ICategoriesRepository } from "../../repositories/ICategoriesRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {};

    execute({ name, description }: IRequest) {
        const categoryAlreayExists = this.categoriesRepository.findByName(name);

        if(categoryAlreayExists) {
            throw new Error('Category already exists!'); 
        };
    
        this.categoriesRepository.create({ name, description });
    };
};

export default CreateCategoryUseCase;