import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { EditPetUseCase } from "../cases/edit-pet";

export function makeEditPetUseCase(){
  const petRepository = new PrismaPetsRepository();
  const useCase = new EditPetUseCase(petRepository);
  return useCase;
}