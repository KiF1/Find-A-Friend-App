import { Pet } from "@prisma/client";
import { PetRepository } from "@/repositories/interface/pets-repository";
import { OrganizationRepository } from "@/repositories/interface/organizations-repository";
import { OrganizationNotExists } from "../errors/organization-not-exists";

interface CreatePetUseCaseRequest {
  name: string;
  description: string | null;
  age: string;
  size: string;
  energy_level: string;
  dependency_level: string;
  environment: string;
  requirements: string[];
  photos: string[]
  organization_id: string;
}

interface CreatePetUseCaseResponse {
  pet: Pet;
}

export class CreatePetUseCase {
  constructor( private petRepository: PetRepository, private organizationRepository: OrganizationRepository) {}

  async execute({ name, age, dependency_level, description, energy_level, environment, organization_id, photos, requirements, size }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const organization = await this.organizationRepository.findById(
      organization_id
    );
    if (!organization) {
      throw new OrganizationNotExists();
    }

    const pet = await this.petRepository.create({ name, age, dependency_level, description, energy_level, environment, organization_id, photos, requirements, size });
    return { pet };
  }
}