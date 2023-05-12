import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to authenticate', async () => {
    await request(app.server).post('/organizations').send({
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email: 'javascriptDogs@example.com',
      password: '123456'  
    })

    const response = await request(app.server).post('/sessions').send({
      email: 'javascriptDogs@example.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({ token: expect.any(String) })
  })
})