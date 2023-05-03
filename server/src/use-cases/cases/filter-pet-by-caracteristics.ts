import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';

interface FilterByCaractristcs{
  age?: string;
  energy?: string;
  size?: string;
  dependency_level?: string;
}

interface FilterPetByCaracteristicsUseCaseRequest {
  state: string,
  city: string
  params: FilterByCaractristcs
  page: number
}

interface FilterPetByCaracteristicsUseCaseResponse{
  pets: Pet[] | null
}

export class FilterPetByCaracteristicUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ state, city ,params, page }: FilterPetByCaracteristicsUseCaseRequest): Promise<FilterPetByCaracteristicsUseCaseResponse>{
    const organizationsNearby = await this.organizationsRepository.findManyNearby(state, city);
    const petsInOrganization = await Promise.all(organizationsNearby.map(organization => {
      return this.petsRepository.findPetInOrganizationById(organization.id);
    }));
    const filteredPetsNearby = petsInOrganization.filter((pet): pet is Pet => pet !== null);
    const pets = await filteredPetsNearby.filter((item) => {
      for(const key in params){
        if(item[key as keyof Pet] !== params[key as keyof FilterByCaractristcs]){
          return false
        }
      }
      return true
    }).slice((page - 1) * 20, page * 20);
    
    return { pets }
  }
}