import Especification from "../entities/Especification";

export interface ICreateEspecificationDTO {
    name: string;
    description: string;
};

export interface IEspecificationRepository {
    create({ name, description }: ICreateEspecificationDTO): Promise<void>;

    findByName: (name: string) => Promise<Especification>;
};