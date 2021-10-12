import { ICategoriesRepository } from "../../repositories/ICategoriesRepositories";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {};

    execute() {
        const allCategories = this.categoriesRepository.list();

        return allCategories;
    };
};

export default ListCategoriesUseCase;