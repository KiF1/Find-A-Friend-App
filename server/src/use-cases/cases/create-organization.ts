import { OrganizationRepository } from "@/repositories/interface/organizations-repository"
import { Organization } from "@prisma/client"
import { hash } from "bcryptjs"
import { OrganizationAlreadyExistsError } from "../errors/organization-already-exists-error"

interface CreateOrganizationUseCaseRequest {
  name: string
  email: string,
  password: string,
  description: string | null
  phone: string
  latitude: number
  longitude: number
}

interface CreateOrganizationUseCaseResponse{
  organization: Organization
}

export class CreateOrganizationUseCase{
  constructor(private organizationRepository: OrganizationRepository) {}

  async execute({ name, email, password, description, phone, latitude, longitude }: CreateOrganizationUseCaseRequest): Promise<CreateOrganizationUseCaseResponse>{
    const password_hash = await  hash(password, 6);
    const userWithSomeEmail = await this.organizationRepository.findByEmail(email);
  
    if(userWithSomeEmail){
      throw new OrganizationAlreadyExistsError()
    }
    const organization = await this.organizationRepository.create({ name, email, password_hash, description, phone, latitude, longitude })
    return { organization }
  }
}