import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";

describe('Fetch Nearby Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to fetch a nearby pet ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app)

    await request(app.server).post('/pets').set('Authorization', `Bearer ${token}`).send({
      name: 'Vira Lata',
      description: 'Vira Lata',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: idOrganization,
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    await request(app.server).post('/pets').set('Authorization', `Bearer ${token}`).send({
      name: 'Pudou',
      description: 'Pudou',
      age: 'filhote',
      size: 'pequeno',
      energy_level: 'Baixa',
      dependency_level: 'Baixa',
      environment: 'grande',
      requirements: ['ambiente amplo', 'ambiente receptivo'],
      organization_id: idOrganization,
      photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
    })

    const petResponse = await request(app.server).get('/pets/nearby?filtered=Pernambuco&city=Olinda&page=1&size=pequeno&dependency_level=baixa').set('Authorization', `Bearer ${token}`).send({})
    expect(petResponse.statusCode).toEqual(200);
    expect(petResponse.body.pets).toEqual(expect.objectContaining({
      name: 'Pudou'
    }))
  })
})