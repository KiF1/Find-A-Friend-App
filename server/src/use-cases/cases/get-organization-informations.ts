import { Organization } from "@prisma/client";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";
import { OrganizationRepository } from "@/repositories/interface/organizations-repository";

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
      throw new InvalidCredentialsError()
    }

    return { organization }
  }
}