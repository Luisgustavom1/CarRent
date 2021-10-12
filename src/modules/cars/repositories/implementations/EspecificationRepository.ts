import Especification from "../../model/Especification";
import { ICreateEspecificationDTO, IEspecificationRepository } from "../IEspecificationRepository";

class EspecificationRepository implements IEspecificationRepository {
    private especification: Especification[];

    constructor() {
        this.especification = [];
    }

    create({ name, description }: ICreateEspecificationDTO): void {
        const especification = new Especification();

        Object.assign(especification, {
            description,
            name,
        });

        this.especification.push(especification);
    };

    findByName(name: string): Especification {
        const specification = this.especification.find( specification => specification.name === name );

        return specification;
    }
};

export default EspecificationRepository;