
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOrganizationUseCase } from '../cases/create-organization'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { EditOrganizationUseCase } from '../cases/edit-organization'
import { OrganizationNotExists } from '../errors/organization-not-exists'


let organizationRepository: InMemoryOrganizationsRepository
let createOrganization: CreateOrganizationUseCase
let sut: EditOrganizationUseCase

describe('Edit Organization Use Case', () => {
  beforeEach(async () => {
    organizationRepository = new InMemoryOrganizationsRepository();
    createOrganization = new CreateOrganizationUseCase(organizationRepository)
    sut = new EditOrganizationUseCase(organizationRepository);

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
  })

  it('Should be able to edit a Organization', async () => {
    const { organizationEdited } = await sut.execute({
      id: 'organization-1',
      data: {
        name: 'Typescript',
        description: 'JavaScript Organization',
        phone: '(81) 984421742',
        address: 'Rua Lajedo, 107',
        cep: '53250-510',
        state: 'Pernambuco',
        city: 'Olinda',
        email: 'javascriptDogs@example.com',
        password_hash: await hash('123456', 6),
        photo: 'example.com'
      }
    })
    expect(organizationEdited).toEqual(expect.objectContaining({ name: 'Typescript' }))
  })

  it('Should not be able to edit a Organization', async () => {
    await expect(() => sut.execute({
      id: 'organization-02',
      data: {
        name: 'Typescript',
        description: 'JavaScript Organization',
        phone: '(81) 984421742',
        address: 'Rua Lajedo, 107',
        cep: '53250-510',
        state: 'Pernambuco',
        city: 'Olinda',
        email: 'javascriptDogs@example.com',
        password_hash: '123456',
        photo: 'example.com'
      }
    })).rejects.toBeInstanceOf(OrganizationNotExists)
  })
})