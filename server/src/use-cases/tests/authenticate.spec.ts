
import { InMemoryOrganizationsRepository } from '../../repositories/in-memory/in-memory-organizations-repository'
import { AuthenticateUseCase } from '../cases/authenticate'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'
import { expect, describe, it, beforeEach } from 'vitest'

let organizationsRepository: InMemoryOrganizationsRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new AuthenticateUseCase(organizationsRepository);
  })
  
  it('should be able to authenticate', async () => {
    await organizationsRepository.create({
      id: randomUUID(),
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
    const { organization } = await sut.execute({
      email: 'javascriptDogs@example.com',
      password: '123456',
    })
    expect(organization.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'javascript@example.com',
        password: '123456',
      })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await organizationsRepository.create({
      id: randomUUID(),
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

    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123123',
      })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})