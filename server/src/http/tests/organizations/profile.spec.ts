import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcryptjs";

describe('Profile Origanization (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to get organization profile ', async () => {
    const organization = await prisma.organization.create({
      data: {
        name: 'JavaScript Dogs',
        description: 'JavaScript Organization',
        phone: '(81) 984421742',
        address: 'Rua Lajedo, 107',
        cep: '53250-510',
        state: 'Pernambuco',
        city: 'Olinda',
        email: 'javascriptCats@example.com',
        password_hash: await hash('123456', 6),  
      }
    })

    const authResponse = await request(app.server).post('/sessions').send({
      email: 'javascriptCats@example.com',
      password: '123456',
    })
    const { token } = authResponse.body;

    const profileResponse = await request(app.server).get(`/organizations/${organization.id}`).set('Authorization', `Bearer ${token}`).send()
    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.organization).toEqual(expect.objectContaining({
      email: 'javascriptCats@example.com'
    }))
  })
})