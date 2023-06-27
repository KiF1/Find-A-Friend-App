import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';
import { OrganizationNotExists } from "../errors/organization-not-exists";

interface GetPetsInOrganizationUseCaseRequest {
  id: string;
  page: number;
}

interface GetPetsInOrganizationUseCaseResponse{
  pets: Pet[] | null
}

export class GetPetsInOrganizationUseCase{
  constructor(private organizationsRepository: OrganizationRepository, private petsRepository: PetRepository){}

  async execute({ id, page }: GetPetsInOrganizationUseCaseRequest): Promise<GetPetsInOrganizationUseCaseResponse>{
    const organization = await this.organizationsRepository.findById(id);
    if(!organization){
      throw new OrganizationNotExists()
    }
    
    const pets = await this.petsRepository.findPetsInOrganizationById(organization.id, page);
  

    return { pets };
  }
}