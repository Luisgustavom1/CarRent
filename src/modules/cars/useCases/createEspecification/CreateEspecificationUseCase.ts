import { IEspecificationRepository } from "../../repositories/IEspecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateEspecificationUseCase {
    constructor (private especificationRepository: IEspecificationRepository) {};

    execute({ name, description }: IRequest) {
        const especification = this.especificationRepository.findByName(name);

        if (especification) {
            throw new Error('Especification already exists!')
        };

        this.especificationRepository.create({
            name, description
        });
    }
}

export default CreateEspecificationUseCase;