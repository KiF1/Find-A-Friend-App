import { makeEditPetUseCase } from "../../../use-cases/factories/make-edit-pet-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function edit(request: FastifyRequest, reply: FastifyReply){
  const editBodySchema = z.object({
    data: z.object({
      name: z.string(),
      description: z.string(),
      age: z.string().email(),
      size: z.string().min(6),
      energy_level: z.string(),
      dependency_level: z.string(),
      environment: z.string(),
      requirements: z.array(z.string()),
      organization_id: z.string()
    })
  })

  const idPet =  request.user.sub
  const { data } = editBodySchema.parse(request.body);

  const editPetUseCase = makeEditPetUseCase();
  await editPetUseCase.execute({ id: idPet, data})
  
  return reply.status(204).send()
}