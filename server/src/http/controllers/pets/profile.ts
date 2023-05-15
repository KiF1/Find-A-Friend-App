import { z } from "zod";
import { makeGetPetInformationsUseCase } from "../../../use-cases/factories/make-get-pet-informations";
import { FastifyRequest, FastifyReply } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply){
  const getPetIdParamsSchema = z.object({
    id: z.string().uuid(),
  })
  const { id } = getPetIdParamsSchema.parse(request.params);
  const getPetProfile = makeGetPetInformationsUseCase();
  const { pet }  = await getPetProfile.execute({ id })

  return reply.status(200).send({ pet })
}