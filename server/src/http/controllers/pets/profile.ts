import { makeGetPetInformationsUseCase } from "@/use-cases/factories/make-get-pet-informations";
import { FastifyRequest, FastifyReply } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply){
  const getPetProfile = makeGetPetInformationsUseCase();
  const { pet }  = await getPetProfile.execute({ id: request.user.sub })

  return reply.status(200).send({ pet })
}