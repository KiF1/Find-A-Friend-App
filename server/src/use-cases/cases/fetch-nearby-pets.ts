import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';

interface FetchNearbyPetsUseCaseRequest {
  state: string;
  city: string;
  page: number;
}

interface FetchNearbyPetsUseCaseResponse{
  pets: Pet[] | null
}

export class FetchNearbyPetUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ state, city, page }: FetchNearbyPetsUseCaseRequest): Promise<FetchNearbyPetsUseCaseResponse>{
    const organizations = await this.organizationsRepository.findManyNearby(state, city);
    const pets = (await Promise.all(organizations?.map(async (organization) => {
        return this.petsRepository.findPetsInOrganizationById(organization.id, page);
      }) ?? []
    )).flat();
  

    return { pets };
  }
}