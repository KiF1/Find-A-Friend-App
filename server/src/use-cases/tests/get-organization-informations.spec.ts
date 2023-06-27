
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { hash } from 'bcryptjs'
import { GetOrganizationInformationsUseCase } from '../cases/get-organization-informations'
import { OrganizationNotExists } from '../errors/organization-not-exists'


let organizationRepository: InMemoryOrganizationsRepository
let sut: GetOrganizationInformationsUseCase

describe('Register Pet Use Case', () => {
  beforeEach(async () => {
    organizationRepository = new InMemoryOrganizationsRepository()
    sut = new GetOrganizationInformationsUseCase(organizationRepository);

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

  it('Should be able to get a specific Organization', async () => {
    const { organization } = await sut.execute({
      id: 'organization-1'
    })
    expect(organization.id).toEqual(expect.any(String))
  })

  it('Should not be able to get a specific Pet', async () => {
    await expect(() => sut.execute({
      id: 'pet-02',
    })).rejects.toBeInstanceOf(OrganizationNotExists)
  })
}) 