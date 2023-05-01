import { Prisma, Pet } from "@prisma/client";
import { FilterByCaractristcs, PetRepository } from "../interface/pets-repository";
import { randomUUID } from "crypto";

export class InMemoryPets implements PetRepository{
  public items: Pet[] = []  

  async create(data: Prisma.PetUncheckedCreateInput){
    const pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      description: data.description ?? null,
      age: data.age,
      size: data.size,
      energy_level: data.energy_level,
      dependency_level: data.dependency_level,
      environment: data.environment,
      requirements: typeof data.requirements === 'string' ? [data.requirements] : [],
      photos: data.photos,
      organization_id: data.organization_id,
      created_at: new Date(),
    }
    this.items.push(pet)
    return pet
  }
  async edit(id: string, data: Prisma.PetUncheckedCreateInput){
    const pet = await this.items.findIndex((item) => item.id === id);
    const updatedPet = { ...this.items[pet], ...data, requirements: typeof data.requirements === 'string' ? [data.requirements] : [], created_at: new Date() };
    this.items.splice(pet, 1, updatedPet);

    return updatedPet
  }
  
  async findById(id: string){
    const pet = await this.items.find((item) => item.id === id);
    if(!pet){
      return null
    }
    return pet
  }

  async filterByCaracteristics(params: FilterByCaractristcs, page: number){
    const pets = await this.items.filter((item) => {
      for(const key in params){
        if(item[key as keyof Pet] !== params[key as keyof FilterByCaractristcs]){
          return false
        }
      }
      return true
    }).slice((page - 1) * 20, page * 20)
    return pets
  }

}