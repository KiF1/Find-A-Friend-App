import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { CreateOrganizationUseCase } from "../cases/create-organization";

export function makeCreateOrganizationUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const useCase = new CreateOrganizationUseCase(organizationsReporitory)
  return useCase
}