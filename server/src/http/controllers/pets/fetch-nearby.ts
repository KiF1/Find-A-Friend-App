import { makeFetchNearbyPetUseCase } from "@/use-cases/factories/make-fetch-nearby-pets";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function fetchNearbyPets(request: FastifyRequest, reply: FastifyReply){
  const FetchNearbyBodySchema = z.object({
    state: z.string(),
    city: z.string(),
    page: z.number()
  })

  const { state, city, page } = FetchNearbyBodySchema.parse(request.body);
  const FetchNearbyPetUseCase = makeFetchNearbyPetUseCase();
  await FetchNearbyPetUseCase.execute({ state, city, page })
  
  return reply.status(200).send()
}