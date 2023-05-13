import { prisma } from '../src/lib/prisma';
import { hash } from 'bcryptjs';
import { FastifyInstance } from 'fastify';
import request from 'supertest';

export async function createAndAuthenticateOrganization(app: FastifyInstance){
  const organization = await prisma.organization.create({
    data: {
      name: 'JavaScript Dogs',
      description: 'JavaScript Organization',
      phone: '(81) 984421742',
      address: 'Rua Lajedo, 107',
      cep: '53250-510',
      state: 'Pernambuco',
      city: 'Olinda',
      email: 'PythonCats@example.com',
      password_hash: await hash('123456', 6),  
    }
  })
  const idOrganization = organization.id;
  const authResponse = await request(app.server).post('/sessions').send({
    email: 'PythonCats@example.com',
    password: '123456',
  })
  const { token } = authResponse.body;

  return { idOrganization, token }
}