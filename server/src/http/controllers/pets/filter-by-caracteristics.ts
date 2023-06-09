import { makeFilterPetByCaracteristicsUseCase } from "../../../use-cases/factories/make-filter-pet-by-caracteristics";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function filterPetByCaracteristics(request: FastifyRequest, reply: FastifyReply){
  const FetchNearbySchema = z.object({
    state: z.string(),
    city: z.string(),
    page: z.string().transform(value => parseInt(value)),
    age: z.string().optional(),
    energy: z.string().optional(),
    size: z.string().optional(),
    dependency_level: z.string().optional(),
  })
 
  const { state, city, page, age, dependency_level, energy, size } = FetchNearbySchema.parse(request.query);
  const filterPetByCaracteristicsUseCase = makeFilterPetByCaracteristicsUseCase();
  const { pets } = await filterPetByCaracteristicsUseCase.execute({ state, city, page, age, dependency_level, energy, size })
  
  return reply.status(200).send({ pets })
}