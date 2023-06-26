import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { FilterPetByCaracteristicUseCase } from "../cases/filter-pet-by-caracteristics";

export function makeFilterPetByCaracteristicsUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const petsRepository = new PrismaPetsRepository();
  const useCase = new FilterPetByCaracteristicUseCase(organizationsReporitory, petsRepository);
  return useCase;
}