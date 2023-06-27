import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to register organization', async () => {
    const response = await request(app.server).post('/organizations').send({
      name: 'JavaScript Dogs',
      email: 'JhonDogs@example.com',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      password: '123456',
      photo: 'example.com'
    })
    expect(response.statusCode).toEqual(201)
  })
}) 