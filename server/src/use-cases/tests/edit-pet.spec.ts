
import { InMemoryPetsRepository } from '../../repositories/in-memory/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from '../cases/create-pet'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { EditPetUseCase } from '../cases/edit-pet'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'


let petRepository: InMemoryPetsRepository
let organizationRepository: InMemoryOrganizationsRepository
let createPet: CreatePetUseCase
let sut: EditPetUseCase

describe('Register Pet Use Case', () => {
  beforeEach(async () => {
    petRepository = new InMemoryPetsRepository();
    organizationRepository = new InMemoryOrganizationsRepository()
    createPet = new CreatePetUseCase(petRepository, organizationRepository)
    sut = new EditPetUseCase(petRepository);

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
      photo: 'example.com'
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
  })

  it('Should be able to edit a Pet', async () => {
    const { petEdited } = await sut.execute({
      id: 'pet-01',
      data: {
        name: 'Zephyr',
        description: 'Golden Retrivier',
        age: 'filhote',
        size: 'pequeno',
        energy_level: 'Baixa',
        dependency_level: 'Baixa',
        environment: 'grande',
        requirements: ['ambiente amplo', 'ambiente receptivo'],
        photos: ['https://localhost:4000.png', 'https://localhost:4000.png'],
        organization_id: 'organization-1',
      }
    })
    expect(petEdited).toEqual(expect.objectContaining({ name: 'Zephyr' }))
  })

  it('Should not be able to edit a Pet', async () => {
    await expect(() => sut.execute({
      id: 'pet-02',
      data: {
        name: 'Zephyr',
        description: 'Golden Retrivier',
        age: 'filhote',
        size: 'pequeno',
        energy_level: 'Baixa',
        dependency_level: 'Baixa',
        environment: 'grande',
        requirements: ['ambiente amplo', 'ambiente receptivo'],
        photos: ['https://localhost:4000.png', 'https://localhost:4000.png'],
        organization_id: 'organization-1',
      }
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})