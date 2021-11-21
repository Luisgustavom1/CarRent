import { getRepository, Repository } from "typeorm";
import Specification from "../../entities/Especification";
import { ICreateEspecificationDTO, IEspecificationRepository } from "../IEspecificationRepository";

class EspecificationRepository implements IEspecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateEspecificationDTO): Promise<void> {
        const especification = this.repository.create({
            name,
            description
        })

        await this.repository.save(especification)
    };

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            name
        })

        return specification;
    }
};

export default EspecificationRepository;