import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('specifications')
class Specification {
    
    @PrimaryColumn()
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

export default Specification;