import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";

interface FetchNearbyPetsUseCaseRequest {
  userLatitude: number;
  userLongitude: number;
}

interface FetchNearbyPetsUseCaseResponse{
  pets: Pet[]
}

export class FetchNearbyPetUseCase{
  constructor(private organizationsRepository: OrganizationRepository){}

  async execute({ userLatitude, userLongitude }: FetchNearbyPetsUseCaseRequest): Promise<FetchNearbyPetsUseCaseResponse>{
    const pets = await this.organizationsRepository.findManyNearby({ latitude: userLatitude, longitude: userLongitude });
    return pets
  }
}