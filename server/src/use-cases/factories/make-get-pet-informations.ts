import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { GetPetInformationsUseCase } from "../cases/get-pet-informations";

export function makeGetPetInformationsUseCase(){
  const petRepository = new PrismaPetsRepository();
  const useCase = new GetPetInformationsUseCase(petRepository);
  return useCase;
}