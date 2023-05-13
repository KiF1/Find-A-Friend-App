import { makeGetOrganizationInformationsUseCase } from "../../../use-cases/factories/make-get-organization-informations";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod';

export async function profile(request: FastifyRequest, reply: FastifyReply){
   const getOrganizationIdParamsSchema = z.object({
    id: z.string().uuid(),
  })
  const { id } = getOrganizationIdParamsSchema.parse(request.params);
  const getOrganizationProfile = makeGetOrganizationInformationsUseCase();
  const { organization }  = await getOrganizationProfile.execute({ id })

  return reply.status(200).send({ organization: {...organization, password_hash: undefined} })
}