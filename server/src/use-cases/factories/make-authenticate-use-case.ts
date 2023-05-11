import { PrismaOrganizationRepository } from "@/repositories/prisma/prisma-organizations-repository";
import { AuthenticateUseCase } from "../cases/authenticate";

export function makeAuthenticateUseCase(){
  const organizationsRepository = new PrismaOrganizationRepository();
  const useCase = new AuthenticateUseCase(organizationsRepository)
  return useCase
}