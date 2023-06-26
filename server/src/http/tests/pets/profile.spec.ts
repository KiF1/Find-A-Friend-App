import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";
import { prisma } from "@/lib/prisma";

describe('Get a Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to get a pet ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app);
    const pet = await prisma.pet.create({
      data: {
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
      }
    })
    
    const petResponse = await request(app.server).get(`/pets/${pet.id}`).set('Authorization', `Bearer ${token}`).send({})
    expect(petResponse.statusCode).toEqual(200);
    expect(petResponse.body.pet).toEqual(expect.objectContaining({
      name: 'Typescript'
    }))
  })
})