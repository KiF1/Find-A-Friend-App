import { Pet, PetImage, Prisma } from "@prisma/client"
import { PetRepository } from "@/repositories/interface/pets-repository"
import { OrganizationRepository } from "@/repositories/interface/organizations-repository"
import path from "node:path"
import { randomUUID } from "node:crypto"
import fs from 'node:fs'


interface CreatePetUseCaseRequest {
  name: string
  description: string | null
  age: string
  size: string
  energy_level: string
  dependency_level: string
  environment: string
  requirements: string[]
  photos: Buffer[],
  organization_id: string
}

interface CreatePetUseCaseResponse{
  pet: Pet
}

export class CreatePetUseCase{
  constructor(private petRepository: PetRepository, private organizationRepository: OrganizationRepository) {}

  async execute({ name, age, dependency_level, description, energy_level, environment, organization_id, photos, requirements, size  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse>{
    const organization = await this.organizationRepository.findById(organization_id)
    if(!organization){
      throw new Error()
    }
    
    const idPet = randomUUID();
    const photoUrls: PetImage[] = []
    for (const photo of photos) {
      const photoId = randomUUID()
      const photoPath = path.join(__dirname, '..', '..', 'tmp', photoId)
      fs.writeFileSync(photoPath, photo)
      const photos = {id: photoId, url: `http://localhost:3000/pets/${photoId}`, pet_id: idPet}
      photoUrls.push(photos)
    }

    const petImagesUnchecked: Prisma.PetImageUncheckedCreateNestedManyWithoutPetInput = {
      createMany: {
        data: photoUrls.map((photoUrl) => ({
          id: photoUrl.id,
          url: photoUrl.url,
        })),
      },
    };

    const pet = await this.petRepository.create({ id: idPet, name, age, dependency_level, description, energy_level, environment, organization_id, photos: petImagesUnchecked, requirements, size })
    return { pet }
  }
}