import { makeCreatePetUseCase } from "../../../use-cases/factories/make-create-pet-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    age: z.string(),
    size: z.string(),
    energy_level: z.string(),
    dependency_level: z.string(),
    environment: z.string(),
    requirements: z.array(z.string()),
    organization_id: z.string(),
    photos: z.array(z.string())
  })

  const { name, age, dependency_level, description, energy_level, environment, organization_id, requirements, size, photos } = registerBodySchema.parse(request.body);
  
  // const pet_file = request.files["photos"]?.[0]?.filename;
  // const photosPet = pet_file ? pet_file : photos;
  // console.log(photosPet)

  const createPetUseCase = makeCreatePetUseCase();
  await createPetUseCase.execute({ name, age, dependency_level, description, energy_level, environment, organization_id, requirements, size, photos })
  
  return reply.status(201).send()
}