import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepositories";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
    ) {};

    async execute() {
        const allCategories = await this.categoriesRepository.list();

        return allCategories;
    };
};

export default ListCategoriesUseCase;