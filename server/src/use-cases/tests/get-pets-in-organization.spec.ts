
import { InMemoryPetsRepository } from '../../repositories/in-memory/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { CreatePetUseCase } from '../cases/create-pet'
import { GetPetsInOrganizationUseCase } from '../cases/get-pets-in-organization'
import { OrganizationNotExists } from '../errors/organization-not-exists'


let organizationsRepository: InMemoryOrganizationsRepository
let petsRepository: InMemoryPetsRepository
let createPet: CreatePetUseCase
let sut: GetPetsInOrganizationUseCase

describe('Get Pets In Organization Use Case', () => {
  beforeEach(async () => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    petsRepository = new InMemoryPetsRepository();
    createPet = new CreatePetUseCase(petsRepository, organizationsRepository)
    sut = new GetPetsInOrganizationUseCase(organizationsRepository, petsRepository);

    await organizationsRepository.create({
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

  it('Should be able to get a Pets in a organization', async () => {

    const { pets } = await sut.execute({
      id: 'organization-1',
      page: 1
    })
    expect(pets).toHaveLength(1)
  })

  it('Should not be able to get a Pets in a organization', async () => {
    await expect(() => sut.execute({
      id: 'organization-2',
      page: 1
    })).rejects.toBeInstanceOf(OrganizationNotExists)
  })
})