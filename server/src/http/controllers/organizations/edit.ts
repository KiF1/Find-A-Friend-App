import { makeEditOrganizationUseCase } from "../../../use-cases/factories/make-edit-organization-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function edit(request: FastifyRequest, reply: FastifyReply){
  const editBodySchema = z.object({
    id: z.string().uuid(),
    data: z.object({
      name: z.string(),
      description: z.string(),
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      city: z.string(),
      state: z.string(),
      password_hash: z.string(),
      cep: z.string(),
      photo: z.string()
    })
  })
  const { id, data } = editBodySchema.parse(request.body);

  const editOrganizationUseCase = makeEditOrganizationUseCase();
  await editOrganizationUseCase.execute({ id, data })
  
  return reply.status(204).send()
}