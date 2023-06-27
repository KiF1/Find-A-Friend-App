import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "../../../lib/prisma";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";
import { hash } from "bcryptjs";

describe('Edit Organization (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to edit a organization ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app)

    const organizationEdited = await request(app.server).put(`/organizations/${idOrganization}`).set('Authorization', `Bearer ${token}`).send({
      id: idOrganization,
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
    expect(organizationEdited.statusCode).toEqual(204);
  })
})