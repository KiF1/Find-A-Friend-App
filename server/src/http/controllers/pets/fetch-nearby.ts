import { makeFetchNearbyPetUseCase } from "../../../use-cases/factories/make-fetch-nearby-pets";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function fetchNearbyPets(request: FastifyRequest, reply: FastifyReply){
  const FetchNearbyBodySchema = z.object({
    state: z.string(),
    city: z.string(),
    page: z.string().transform(value => parseInt(value))
  })

  const { state, city, page } = FetchNearbyBodySchema.parse(request.query);
  const FetchNearbyPetUseCase = makeFetchNearbyPetUseCase();
  const { pets } = await FetchNearbyPetUseCase.execute({ state, city, page })
  
  return reply.status(200).send({ pets })
}