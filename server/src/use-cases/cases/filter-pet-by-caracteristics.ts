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
  page: number
  age?: string;
  energy?: string;
  size?: string;
  dependency_level?: string;
}

interface FilterPetByCaracteristicsUseCaseResponse{
  pets: Pet[] | null
}

export class FilterPetByCaracteristicUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ state, city, page, age, dependency_level, energy, size }: FilterPetByCaracteristicsUseCaseRequest): Promise<FilterPetByCaracteristicsUseCaseResponse>{
    const params: FilterByCaractristcs = { age, energy, size, dependency_level }
    const organizations = await this.organizationsRepository.findManyNearby(state, city);
    const petsNearby = (await Promise.all(organizations?.map(async (organization) => {
        return this.petsRepository.findPetsInOrganizationById(organization.id, page);
      }) ?? []
    )).flat();

    const pets = await petsNearby.filter((item) => {
      for(const key in params){
        if (params[key as keyof FilterByCaractristcs] !== undefined && 
          item[key as keyof Pet] !== params[key as keyof FilterByCaractristcs]) {
          return false
        }
      }
      return true
    }).slice((page - 1) * 20, page * 20);
    
    return { pets }
  }
}