import { Pet } from "@prisma/client";
import { PetRepository } from '../../repositories/interface/pets-repository';
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";

interface GetPetInformationssUseCaseRequest {
  id: string
}

interface GetPetInformationssUseCaseResponse{
  pet: Pet
}

export class GetPetInformationsUseCase{
  constructor(private petsRepository: PetRepository){}

  async execute({ id }: GetPetInformationssUseCaseRequest): Promise<GetPetInformationssUseCaseResponse>{
    const pet = await this.petsRepository.findById(id);
    if(!pet){
      throw new InvalidCredentialsError()
    }

    return { pet }
  }
}