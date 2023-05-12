import { makeCreatePetUseCase } from "@/use-cases/factories/make-create-pet-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
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
  const { name, age, dependency_level, description, energy_level, environment, organization_id, requirements, size } = registerBodySchema.parse(request.body);
  const pet_file = await request.file.filename;

  const createPetUseCase = makeCreatePetUseCase();
  await createPetUseCase.execute({ name, age, dependency_level, description, energy_level, environment, organization_id, requirements, size, photos: pet_file })
  
  return reply.status(201).send()
}