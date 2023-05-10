import { Pet, Prisma } from "@prisma/client"
import { PetRepository } from "@/repositories/interface/pets-repository"
import { InvalidCredentialsError } from "../errors/invalid-credentials-error"


interface EditPetUseCaseRequest {
  id: string
  data: Prisma.PetUpdateInput
}

interface EditPetUseCaseResponse{
  petEdited: Pet
}

export class EditPetUseCase{
  constructor(private petsRepository: PetRepository) {}

  async execute({ id, data  }: EditPetUseCaseRequest): Promise<EditPetUseCaseResponse>{
    const pet = await this.petsRepository.findById(id);
    if(!pet){
      throw new InvalidCredentialsError()
    }

    const petEdited = await this.petsRepository.edit(id, data);
    return { petEdited }
  }
}