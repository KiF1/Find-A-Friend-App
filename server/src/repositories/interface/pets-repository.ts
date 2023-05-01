import { Pet, Prisma } from "@prisma/client";

export interface FilterByCaractristcs{
  age?: string;
  energy?: string;
  size?: string;
  dependency_level?: string;
}

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  edit(id: string, data: Prisma.PetUncheckedCreateInput): Promise<Pet> 
  findById(id: string): Promise<Pet | null>
  filterByCaracteristics(params: FilterByCaractristcs, page: number): Promise<Pet[]>
}