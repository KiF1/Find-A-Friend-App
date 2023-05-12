import { PrismaPetsRepository } from "../../repositories/prisma/prisma-pets-repository";
import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { FetchNearbyPetUseCase } from "../cases/fetch-nearby-pets";

export function makeFetchNearbyPetUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const petRepository = new PrismaPetsRepository();
  const useCase = new FetchNearbyPetUseCase(organizationsReporitory, petRepository);
  return useCase;
}