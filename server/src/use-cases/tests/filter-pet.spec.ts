
import { InMemoryPetsRepository } from '../../repositories/in-memory/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { CreatePetUseCase } from '../cases/create-pet'
import { FilterPetByCaracteristicUseCase } from '../cases/filter-pet-by-caracteristics'


let organizationsRepository: InMemoryOrganizationsRepository
let petsRepository: InMemoryPetsRepository
let createPet: CreatePetUseCase
let sut: FilterPetByCaracteristicUseCase

describe('Fetch Nearby Pet Use Case', () => {
  beforeEach(async () => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    petsRepository = new InMemoryPetsRepository();
    createPet = new CreatePetUseCase(petsRepository, organizationsRepository)
    sut = new FilterPetByCaracteristicUseCase(organizationsRepository, petsRepository);
  })

  it('Should be able to Filter Pets with caracteristics', async () => {
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
    })

    await createPet.execute({
      name: 'Rust',
      description: 'Golden Retrivier',
      age: 'Adulto',
      size: 'Médio',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: 'organization-1',
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    await createPet.execute({
      name: 'Zephyr',
      description: 'Golden Retrivier',
      age: 'Adulto',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: 'organization-1',
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    const { pets } = await sut.execute({
      state: 'Pernambuco',
      city: 'Olinda',
      page: 1,
      age: 'Adulto',
      size: 'Médio'
    })

    expect(pets).toHaveLength(1)
  })
})