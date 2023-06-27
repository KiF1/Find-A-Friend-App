import { Organization } from "@prisma/client";
import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { OrganizationNotExists } from "../errors/organization-not-exists";

interface GetOrganizationInformationsUseCaseRequest {
  id: string
}

interface GetOrganizationInformationsUseCaseResponse{
  organization: Organization
}

export class GetOrganizationInformationsUseCase{
  constructor(private organizationsRepository: OrganizationRepository){}

  async execute({ id }: GetOrganizationInformationsUseCaseRequest): Promise<GetOrganizationInformationsUseCaseResponse>{
    const organization = await this.organizationsRepository.findById(id);
    if(!organization){
      throw new OrganizationNotExists()
    }

    return { organization }
  }
}