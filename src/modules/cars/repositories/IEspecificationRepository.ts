import Especification from "../model/Especification";

export interface ICreateEspecificationDTO {
    name: string;
    description: string;
};

export interface IEspecificationRepository {
    create({ name, description }: ICreateEspecificationDTO): void;

    findByName: (name: string) => Especification;
};