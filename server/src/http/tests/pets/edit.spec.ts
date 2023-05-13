import request from "supertest";
import { app } from "../../../app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "../../../lib/prisma";
import { hash } from "bcryptjs";
import { createAndAuthenticateOrganization } from "utils/create-and-authenticate-organization";

describe('Edit Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Shold be able to edit a pet ', async () => {
    const { idOrganization, token } = await createAndAuthenticateOrganization(app)

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

    const petEdited = await request(app.server).put(`/pets/${pet.id}`).set('Authorization', `Bearer ${token}`).send({
      id: pet.id,
      data: {
        name: 'Phyton',
        description: 'Golden Phyton',
        age: 'filhote',
        size: 'pequeno',
        energy_level: 'Baixa',
        dependency_level: 'Baixa',
        environment: 'grande',
        requirements: ['ambiente amplo', 'ambiente receptivo'],
        organization_id: 'organization-put',
        photos: ['https://localhost:4000.png', 'https://localhost:4000.png']
      }
    })
    expect(petEdited.statusCode).toEqual(204);
  })
})