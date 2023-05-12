import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { CreatePetUseCase } from "../cases/create-pet";
import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";

export function makeCreatePetUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const petRepository = new PrismaPetsRepository();
  const useCase = new CreatePetUseCase(petRepository, organizationsReporitory);
  return useCase;
}