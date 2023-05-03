import { Pet } from "@prisma/client"
import { PetRepository } from "@/repositories/interface/pets-repository"
import { InvalidCredentialsError } from "../errors/invalid-credentials-error"


interface EditPetUseCaseRequest {
  id: string
  data: Pet
}

interface EditPetUseCaseResponse{
  petCreated: Pet
}

export class EditPetUseCase{
  constructor(private petsRepository: PetRepository) {}

  async execute({ id, data  }: EditPetUseCaseRequest): Promise<EditPetUseCaseResponse>{
    const pet = await this.petsRepository.findById(id);
    if(!pet){
      throw new InvalidCredentialsError()
    }

    const petCreated = await this.petsRepository.edit(id, data);
    return { petCreated }
  }
}