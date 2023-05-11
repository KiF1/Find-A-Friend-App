import { OrganizationAlreadyExistsError } from "@/use-cases/errors/organization-already-exists-error";
import { makeCreateOrganizationUseCase } from "@/use-cases/factories/make-create-organization-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    description: z.string(),
    phone: z.string(),
    state: z.string(),
    city: z.string(),
    address: z.string(),
    cep: z.string()
  })
  const { name, email, password, description, phone, state, city, address, cep } = registerBodySchema.parse(request.body);
  
  try {
    const registerUseCase = makeCreateOrganizationUseCase();
    await registerUseCase.execute({name, email, password, description, phone, state, city, address, cep})
  } catch (error) {
    if(error instanceof OrganizationAlreadyExistsError){
      return reply.status(409).send({ message: error.message })
    }else{
      throw error
    }
  }

  return reply.status(201).send()
}