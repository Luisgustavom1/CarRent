import Category from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepositories';

class CategoriesRepository implements ICategoriesRepository{
    private category: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.category = [];
    };

    public static getInstance() {
        if(!CategoriesRepository.INSTANCE) {
            return CategoriesRepository.INSTANCE = new CategoriesRepository();
        };

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, {
            name, 
            description,
            created_at: new Date(),
        });

        this.category.push(category);
    };

    list() {
        return this.category;
    };

    findByName(name: string) {
        const category = this.category.find(category => category.name === name);
        return category;
    }
};

export default CategoriesRepository;