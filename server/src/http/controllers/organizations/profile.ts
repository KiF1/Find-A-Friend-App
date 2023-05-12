import { makeGetOrganizationInformationsUseCase } from "../../../use-cases/factories/make-get-organization-informations";
import { FastifyRequest, FastifyReply } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply){
  const getOrganizationProfile = makeGetOrganizationInformationsUseCase();
  const { organization }  = await getOrganizationProfile.execute({ id: request.params.id})

  return reply.status(200).send({ organization: {...organization, password_hash: undefined} })
}