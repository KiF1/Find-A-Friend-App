
import { InMemoryPetsRepository } from '../../repositories/in-memory/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from '../cases/create-pet'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { GetPetInformationsUseCase } from '../cases/get-pet-informations'


let petRepository: InMemoryPetsRepository
let organizationRepository: InMemoryOrganizationsRepository
let createPet: CreatePetUseCase
let sut: GetPetInformationsUseCase

describe('Register Pet Use Case', () => {
  beforeEach(async () => {
    petRepository = new InMemoryPetsRepository();
    organizationRepository = new InMemoryOrganizationsRepository()
    createPet = new CreatePetUseCase(petRepository, organizationRepository)
    sut = new GetPetInformationsUseCase(petRepository);

  })

  it('Should be able to get a specific Pet', async () => {
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

    await createPet.execute({
      id: 'pet-01',
      name: 'Rust',
      description: 'Golden Retrivier',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: 'organization-1',
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    const { pet } = await sut.execute({
      id: 'pet-01'
    })
    expect(pet).toEqual(expect.objectContaining({ name: 'Rust' }))
  })

  it('Should not be able to get a specific Pet', async () => {
    await expect(() => sut.execute({
      id: 'pet-02',
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})