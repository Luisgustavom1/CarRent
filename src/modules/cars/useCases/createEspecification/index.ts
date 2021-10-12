import EspecificationRepository from "../../repositories/implementations/EspecificationRepository";
import CreateEspecificationController from "./createEspecificationController";
import CreateEspecificationUseCase from "./CreateEspecificationUseCase";

const especificationRepository = new EspecificationRepository();

const createEspecificationUseCase = new CreateEspecificationUseCase(especificationRepository);

const createEspecificationController = new CreateEspecificationController(createEspecificationUseCase);

export { createEspecificationController };