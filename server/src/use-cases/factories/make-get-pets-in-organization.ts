import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { GetPetsInOrganizationUseCase } from "../cases/get-pets-in-organization";

export function makeGetPetsInOrganizationUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const petRepository = new PrismaPetsRepository();
  const useCase = new GetPetsInOrganizationUseCase(organizationsReporitory, petRepository);
  return useCase;
}