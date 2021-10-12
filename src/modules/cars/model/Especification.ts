import { v4 as uuidv4 } from 'uuid';

class Category {
    id: string;
    description: string;
    name: string;
    created_at: string;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export default Category;