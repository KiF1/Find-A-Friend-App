import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOrganizationUseCase } from '../cases/create-organization'
import { compare } from 'bcryptjs'
import { OrganizationAlreadyExistsError } from '../errors/organization-already-exists-error'


let organizationRepository: InMemoryOrganizationsRepository
let sut: CreateOrganizationUseCase

describe('Register Organization Use Case', () => {
  beforeEach(() => {
    organizationRepository = new InMemoryOrganizationsRepository()
    sut = new CreateOrganizationUseCase(organizationRepository);
  })
  it('Should be able to create organization', async () => {
    const { organization } = await sut.execute({
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email: 'javascriptDogs@example.com',
      password: '123456',
    })
    expect(organization.id).toEqual(expect.any(String))
  })

  it('Should hash user password upon registration', async () => {
    const { organization } = await sut.execute({
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email: 'javascriptDogs@example.com',
      password: '123456',
    })
    const isPasswordCorrectlyHashed = await compare('123456', organization.password_hash)
    expect(isPasswordCorrectlyHashed).toBe(true);
  })

  it('Should not be able to register with same email twice', async () => {
    const email = 'JohnDoe@gmail.com';
    await sut.execute({
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email,
      password: '123456',
    })
    await expect(() => sut.execute({
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email,
      password: '123456',
    })).rejects.toBeInstanceOf(OrganizationAlreadyExistsError)
  })
})