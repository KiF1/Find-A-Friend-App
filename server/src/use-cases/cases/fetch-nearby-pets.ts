import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';

interface FetchNearbyPetsUseCaseRequest {
  state: string;
  city: string;
}

interface FetchNearbyPetsUseCaseResponse{
  pets: Pet[] | null
}

export class FetchNearbyPetUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ state, city }: FetchNearbyPetsUseCaseRequest): Promise<FetchNearbyPetsUseCaseResponse>{
    const organizations = await this.organizationsRepository.findManyNearby(state, city);
    const pets = (await Promise.all(organizations?.map(async (organization) => {
        return this.petsRepository.findPetInOrganizationById(organization.id);
      }) ?? []
    )).flat();
  

    return { pets };
  }
}