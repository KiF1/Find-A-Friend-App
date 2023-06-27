import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

describe('Refresh (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to refresh a token', async () => {
    await prisma.organization.create({
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
        photo: 'example.com'
      }
    })

    const authResponse = await request(app.server).post('/sessions').send({
      email: 'javascriptCats@example.com',
      password: '123456',
    })

    const cookies = authResponse.get('Set-Cookie')
    const response = await request(app.server).patch('/token/refresh').set('Cookie', cookies).send()
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({ token: expect.any(String) })
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken=')
    ])
  })
})