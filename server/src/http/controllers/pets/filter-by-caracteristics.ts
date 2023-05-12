import { makeFilterPetByCaracteristicsUseCase } from "@/use-cases/factories/make-filter-pet-by-caracteristics";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function filterPetByCaracteristics(request: FastifyRequest, reply: FastifyReply){
  const FetchNearbyBodySchema = z.object({
    state: z.string(),
    city: z.string(),
    page: z.number(),
    params: z.object({
      age: z.string().optional(),
      energy: z.string().optional(),
      size: z.string().optional(),
      dependency_level: z.string().optional(),
    })
  })

  const { state, city, page, params } = FetchNearbyBodySchema.parse(request.body);
  const filterPetByCaracteristicsUseCase = makeFilterPetByCaracteristicsUseCase();
  await filterPetByCaracteristicsUseCase.execute({ state, city, page, params })
  
  return reply.status(200).send()
}