import { Prisma } from "@prisma/client";
import { OrganizationRepository } from "../interface/organizations-repository";
import { prisma } from "../../lib/prisma";

export class PrismaOrganizationRepository implements OrganizationRepository{
  async findById(id: string){
    const organization = await prisma.organization.findUnique({
      where: { id }
    });
    return organization
  }

  async findByEmail(email: string){
    const organization = await prisma.organization.findUnique({
      where: { email }
    });
    return organization
  }

  async findManyNearby(state: string, city: string){
    const organization = await prisma.organization.findMany({
      where: { state: state, city: city }
    });
    return organization
  }

  async create(data: Prisma.OrganizationCreateInput){
    const organization = await prisma.organization.create({ data })
    return organization
  }
  
}