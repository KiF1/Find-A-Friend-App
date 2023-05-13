import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";

describe('Create Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to create a pet ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app)

    const petCreated = await request(app.server).post('/pets').set('Authorization', `Bearer ${token}`).send({
      name: 'Typescript',
      description: 'Golden Retrivier',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: idOrganization,
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })
  
    expect(petCreated.statusCode).toEqual(201)
  })
})