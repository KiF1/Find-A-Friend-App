import { makeGetPetsInOrganizationUseCase } from "@/use-cases/factories/make-get-pets-in-organization";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod';

export async function petsInOrganization(request: FastifyRequest, reply: FastifyReply){
   const getPetsInOrganizationParamsSchema = z.object({
    id: z.string().uuid(),
  })
   const getPetsInOrganizationQuerySchema = z.object({
    page: z.string().transform(value => parseInt(value))
  })

  const { id } = getPetsInOrganizationParamsSchema.parse(request.params);
  const { page } = getPetsInOrganizationQuerySchema.parse(request.query);
  const getPets = makeGetPetsInOrganizationUseCase();
  const { pets }  = await getPets.execute({ id, page })

  return reply.status(200).send({ pets })
}