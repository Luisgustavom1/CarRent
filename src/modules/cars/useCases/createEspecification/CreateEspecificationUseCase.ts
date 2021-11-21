import { inject, injectable } from "tsyringe";
import { IEspecificationRepository } from "../../repositories/IEspecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateEspecificationUseCase {
    constructor (
        @inject('EspecificationRepository')
        private especificationRepository: IEspecificationRepository
    ) {};

    async execute({ name, description }: IRequest) {
        const especification = await this.especificationRepository.findByName(name);

        if (especification) {
            throw new Error('Especification already exists!')
        };

        await this.especificationRepository.create({
            name, description
        });
    }
}

export default CreateEspecificationUseCase;