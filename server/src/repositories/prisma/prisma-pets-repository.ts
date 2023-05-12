import { Prisma, Pet } from "@prisma/client";
import { PetRepository } from "../interface/pets-repository";
import { prisma } from "../../lib/prisma";

export class PrismaPetsRepository implements PetRepository{
  async create(data: Prisma.PetUncheckedCreateInput){
    const pet = await prisma.pet.create({ data });
    return pet;
  }

  async edit(id: string, data: Prisma.PetUncheckedCreateInput){
    const pet = await prisma.pet.update({
      where: { id },
      data: { 
        age: data.age,
        name: data.name,
        description: data.description,
        dependency_level: data.dependency_level,
        energy_level: data.energy_level,
        environment: data.environment,
        photos: data.photos,
        requirements: data.requirements,
        size: data.size
       }
    })
    return pet;
  }

  async findById(id: string){
    const pet = await prisma.pet.findUnique({
      where: { id }
    });
    return pet
  }

  async findPetsInOrganizationById(orgId: string, page: number){
    const pet = await prisma.pet.findMany({ 
      where: {
        id: orgId,
      },
      take: 20,
      skip: (page - 1) * 20
     })
     return pet
  }

}