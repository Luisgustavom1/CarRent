import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("categories")
class Category {
    @PrimaryColumn() 
    // Poderia referenciar caso o nome do elemento fosse diferente do nome da coluna ->
    // @Column('id') 
    id: string;

    @Column()
    description: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: string;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export default Category;