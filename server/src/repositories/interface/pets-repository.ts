import { Pet, Prisma } from "@prisma/client";

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  edit(id: string, data: Prisma.PetUncheckedCreateInput): Promise<Pet> 
  findById(id: string): Promise<Pet | null>
  findPetsInOrganizationById(orgId: string, page: number): Promise<Pet[]>
}