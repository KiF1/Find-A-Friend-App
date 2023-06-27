import { PrismaOrganizationRepository } from "../../repositories/prisma/prisma-organizations-repository";
import { AuthenticateUseCase } from "../cases/authenticate";

export function makeAuthenticateUseCase(){
  const organizationRepository = new PrismaOrganizationRepository();
  const useCase = new AuthenticateUseCase(organizationRepository)
  return useCase
}