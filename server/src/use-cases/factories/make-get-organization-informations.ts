import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { GetOrganizationInformationsUseCase } from "../cases/get-organization-informations";

export function makeGetOrganizationInformationsUseCase(){
  const organizationsReporitory = new PrismaOrganizationRepository();
  const useCase = new GetOrganizationInformationsUseCase(organizationsReporitory)
  return useCase
}