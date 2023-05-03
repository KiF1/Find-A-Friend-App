
import { InMemoryPetsRepository } from '../../repositories/in-memory/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from '../cases/create-pet'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'


let petRepository: InMemoryPetsRepository
let organizationRepository: InMemoryOrganizationsRepository
let sut: CreatePetUseCase

describe('Register Pet Use Case', () => {
  beforeEach(async () => {
    petRepository = new InMemoryPetsRepository();
    organizationRepository = new InMemoryOrganizationsRepository()
    sut = new CreatePetUseCase(petRepository, organizationRepository);

    await organizationRepository.create({
      id: 'organization-1',
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email: 'javascriptDogs@example.com',
      password_hash: await hash('123456', 6),
    })
  })
  it('Should be able to create Pet', async () => {
    const { pet } = await sut.execute({
      name: 'Typescript',
      description: 'Golden Retrivier',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: 'organization-1',
      photos: ['https://localhost:4000', 'https://localhost:4000']
    })
    expect(pet.id).toEqual(expect.any(String))
  })
})