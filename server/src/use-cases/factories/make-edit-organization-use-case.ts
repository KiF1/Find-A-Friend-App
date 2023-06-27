import { PrismaOrganizationRepository } from "@/repositories/prisma/prisma-organizations-repository";
import { EditOrganizationUseCase } from "../cases/edit-organization";

export function makeEditOrganizationUseCase(){
  const organizationRepository = new PrismaOrganizationRepository();
  const useCase = new EditOrganizationUseCase(organizationRepository);
  return useCase;
}