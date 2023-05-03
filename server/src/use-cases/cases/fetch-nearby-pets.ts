import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';

interface FetchNearbyPetsUseCaseRequest {
  state: string;
  city: string;
}

interface FetchNearbyPetsUseCaseResponse{
  petsNearby: Pet[]
}

export class FetchNearbyPetUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ state, city }: FetchNearbyPetsUseCaseRequest): Promise<FetchNearbyPetsUseCaseResponse>{
    const organizations = await this.organizationsRepository.findManyNearby(state, city);
    const pets = await Promise.all(organizations.map(organization => {
      return this.petsRepository.findPetInOrganizationById(organization.id);
    }));
    const petsNearby = pets.filter((pet): pet is Pet => pet !== null);

    return { petsNearby };
  }
}