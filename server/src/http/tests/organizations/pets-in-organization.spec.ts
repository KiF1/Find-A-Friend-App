import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";

describe('Get Pets In Organization (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to get pets in a organization ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app)

    await request(app.server).post('/pets').set('Authorization', `Bearer ${token}`).send({
      name: 'Pitbull',
      description: 'Pitbull',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: idOrganization,
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    const petResponse = await request(app.server).get(`/organizations/${idOrganization}/pets?page=1`).set('Authorization', `Bearer ${token}`).send({})
    expect(petResponse.statusCode).toEqual(200);
    expect(petResponse.body.pets).toHaveLength(1)
  })
})