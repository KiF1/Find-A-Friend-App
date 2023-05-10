import { Pet, Prisma } from "@prisma/client";

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  edit(id: string, data: Prisma.PetUpdateInput): Promise<Pet> 
  findById(id: string): Promise<Pet | null>
  findPetInOrganizationById(orgId: string): Promise<Pet[]>
}