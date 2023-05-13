import { makeEditPetUseCase } from "../../../use-cases/factories/make-edit-pet-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function edit(request: FastifyRequest, reply: FastifyReply){
  const editBodySchema = z.object({
    id: z.string().uuid(),
    data: z.object({
      name: z.string(),
      description: z.string(),
      age: z.string(),
      size: z.string(),
      energy_level: z.string(),
      dependency_level: z.string(),
      environment: z.string(),
      requirements: z.array(z.string()),
      organization_id: z.string(),
      photos: z.array(z.string()).optional(),
    })
  })
  const { id, data } = editBodySchema.parse(request.body);

  const editPetUseCase = makeEditPetUseCase();
  await editPetUseCase.execute({ id, data})
  
  return reply.status(204).send()
}