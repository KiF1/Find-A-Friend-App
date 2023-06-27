import { Organization, Prisma } from "@prisma/client"
import { OrganizationRepository } from "@/repositories/interface/organizations-repository"
import { InvalidCredentialsError } from "../errors/invalid-credentials-error"


interface EditOrganizationUseCaseRequest {
  id: string
  data: Prisma.OrganizationUncheckedCreateInput
}

interface EditOrganizationUseCaseResponse{
  organizationEdited: Organization
}

export class EditOrganizationUseCase{
  constructor(private organizationsRepository: OrganizationRepository) {}

  async execute({ id, data }: EditOrganizationUseCaseRequest): Promise<EditOrganizationUseCaseResponse>{
    const organization = await this.organizationsRepository.findById(id);
    if(!organization){
      throw new InvalidCredentialsError()
    }

    const organizationEdited = await this.organizationsRepository.edit(id, data);
    return { organizationEdited }
  }
}